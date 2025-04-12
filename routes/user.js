const router = require('express').Router()
const contollers = require('../controllers/user.controlers')
router.post('/signup', contollers.singnup)

module.exports = router