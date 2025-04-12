const router = require('express').Router()
const { upload } = require('../middleware/multer.middleware')
const contollers = require('../controllers/user.controlers')
const { auth } = require('../middleware/auth.middleware')
router.post('/signup', upload.single('picture'), contollers.singnup)
router.post('/login', contollers.login);
router.get('/list', auth, contollers.userList)

module.exports = router