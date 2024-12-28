module.exports = (msg, code = 500) => {
  return Object.assign(new Error(msg), { statusCode: code })
}
