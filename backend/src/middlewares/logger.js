const morgan = require('morgan')
const dayjs = require('../utils/timezone')

morgan.token('date', () => dayjs(new Date()).tz('Asia/Jakarta').format('DD/MM/YYYY-HH:mm:ss.SSS'))

const logger = morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev')

module.exports = logger
