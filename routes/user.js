const router = require('express').Router()
const contollers = require('../controllers/user.controlers')
router.get('/signup', contollers.singnup)

module.exports = router