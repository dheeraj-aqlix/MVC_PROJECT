const router = require('express').Router()
const contollers = require('../controllers/user.controlers')
const { auth } = require('../middleware/auth.middleware')
router.post('/signup', contollers.singnup)
router.post('/login', contollers.login);
router.get('/list', auth,  contollers.userList)

module.exports = router