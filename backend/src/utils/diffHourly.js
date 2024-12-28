module.exports = function diffHourly (dataDate) {
  const nowDate = new Date()
  const hourly = 60 * 60 * 1000
  return Math.floor(Math.abs(nowDate - dataDate) / hourly)
}
