const express = require('express')
const multer = require('multer')
const AuthController = require('../controller/authcontroller')
const router = express.Router()

const uploadImage =  multer({limits:{fieldSize: 5*1024*1024}})

router.post('/upload-image', uploadImage.single('upload'), AuthController.uploadImage);


module.exports = router