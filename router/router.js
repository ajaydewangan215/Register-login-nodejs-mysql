const express = require('express')
const router = express.Router()

const ctrlUser  =   require('../controllers/user.controller')

router.get('/', ctrlUser.homepage)
router.get('/register', ctrlUser.getregister)
router.get('/login', ctrlUser.getlogin)
router.post('/register', ctrlUser.postregister)

// router.post('/login', (req, res) => {
//     res.send('index')
// })

module.exports = router