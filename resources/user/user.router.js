const express = require('express');
const userRouter = express.Router();
const { createUser } = require('./user.controller')

userRouter.post('/', createUser);


module.exports = { userRouter }