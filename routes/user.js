const express = require('express')
const UsersController = require('../controller/user')
const router = express.Router()

router.get('/s',UsersController.getUsers)

router.get('/:id', UsersController.getUserById)

router.post('/',UsersController.createUser)

router.put('/:id',UsersController.editUserById)

router.delete('/:id',UsersController.deleteUserById)

module.exports = router