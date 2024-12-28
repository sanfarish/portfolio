const express = require('express')
const limiter = require('../../middlewares/limiter')
const auth = require('../../middlewares/auth')
const visitors = require('../../controllers/visitors.controller')
const router = express.Router()

router.get('/', auth, visitors.getAll)
router.get('/monthly', visitors.getMonthly)
router.get('/:id', visitors.getByID)
router.post('/', limiter, auth, visitors.post)

module.exports = router
