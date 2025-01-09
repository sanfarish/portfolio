const { Visitor } = require('../db/models')
const asyncWrapper = require('../middlewares/asyncWrapper')
const createError = require('../utils/createError')
const dayjs = require('../utils/timezone')
const diffHourly = require('../utils/diffHourly')

const getAll = asyncWrapper(async (req, res) => {
  const queries = req.query
  if (queries[process.env.ADMIN_QUERY] && queries[process.env.ADMIN_QUERY] === process.env.ADMIN_VALUE) {
    const raw = await Visitor.findAll()
    const build = JSON.parse(JSON.stringify(raw))
    const data = build.map(item => {
      item.createdAt = dayjs(item.createdAt).tz('Asia/Jakarta').format('DD/MM/YYYY-HH:mm:ss.SSS')
      item.updatedAt = dayjs(item.updatedAt).tz('Asia/Jakarta').format('DD/MM/YYYY-HH:mm:ss.SSS')
      return item
    })
    res.status(200).json(data)
  } else {
    throw createError('Unauthorized', 401)
  }
})

const getMonthly = asyncWrapper(async (req, res) => {
  const data = await Visitor.findAll()
  const expiredTime = 24 * 30
  const filteredData = data.filter(item => {
    const diff = diffHourly(item.createdAt)
    if (expiredTime < diff) {
      return null
    }
    return item.id
  })
  res.status(200).send(filteredData.length.toString())
})

const getByID = asyncWrapper(async (req, res) => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  if (!uuidRegex.test(req.params.id)) {
    throw createError('Invalid request', 400)
  }

  const data = await Visitor.findOne({ where: { visit: req.params.id } })
  if (!data) {
    throw createError('Not found', 404)
  }
  const expiredTime = 24 * process.env.EXPIRED_TIME
  const diff = diffHourly(data.createdAt)
  if (diff > expiredTime) {
    throw createError('Expired', 400)
  }
  res.status(200).send(data.visit)
})

const post = asyncWrapper(async (req, res) => {
  const remote = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  const visit = req.body.visit
  if (!visit) {
    throw createError('Invalid request', 400)
  }

  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  if (!uuidRegex.test(visit)) {
    throw createError('Invalid request', 400)
  }

  const checker = await Visitor.findOne({ where: { visit } })
  if (checker) {
    throw createError('Already exists', 400)
  }

  const data = await Visitor.create({ remote, visit })
  res.status(201).send(data.visit)
})

module.exports = { getAll, getMonthly, getByID, post }
