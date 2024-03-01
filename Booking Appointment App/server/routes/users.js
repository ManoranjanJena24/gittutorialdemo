const path = require('path');

const express = require('express');

const userController = require('../controllers/users'); //change

const router = express.Router();

// /users => GET
router.get('/users', userController.getUsers);

router.post('/add-user', userController.postAddUser);

router.delete('/delete-user/:id', userController.postDeleteUser);




module.exports = router;
