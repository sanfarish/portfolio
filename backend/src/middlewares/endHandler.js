const error = (err, req, res, next) => {
  if (err) {
    console.error((err.statusCode || 500) + ' error: ' + err.message)
    return res.status(err.statusCode || 500).json({ error: err.message })
  }
  next()
}

const notFound = (req, res) => {
  return res.status(404).send('Not found')
}

module.exports = { error, notFound }
