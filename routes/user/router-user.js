const express = require('express');

const { registerUser, loginUser, deleteUser } = require('../../api/controllers/controller-user');

const router = express.Router();

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

router.route('/delete').delete(deleteUser);

module.exports = router;
