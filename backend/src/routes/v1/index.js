const express = require('express')
const router = express.Router()

const visitors = require('./visitors.route')

router.use('/visitors', visitors)

module.exports = router
