import { NextFunction, Request, Response} from 'express'
import { UserModel } from './user.model'

import bcrypt from 'bcrypt'
const saltRounds = 10;
const myPlainTextPassword = 'p4$$w0rD'

export async function createUser(req: Request, res: Response, next: NextFunction) {
// const isUser = UserModel.find(username: req.body.username)
const user = await UserModel.create(req.body)

res.status(200).json(user)
}