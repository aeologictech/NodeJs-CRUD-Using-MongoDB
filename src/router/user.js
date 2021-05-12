const express = require('express')
const AuthController = require('../controller/authcontroller')
const router = express.Router()


router.post('/create-user', AuthController.createUser );
router.get('/read-user/:id', AuthController.getAllUser );
router.patch('/update-user/:id', AuthController.updateUser );
router.delete('/delete-user/:id', AuthController.deleteUser );


module.exports = router