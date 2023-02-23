import express from 'express'
import { createUser, loginUser, logoutUser } from './user.controller'

export const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.post('/login', loginUser);
userRouter.post('/logout', logoutUser);