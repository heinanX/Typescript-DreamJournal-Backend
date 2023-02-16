const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlainTextPassword = 'p4$$w0rD'

const { UserModel } = require('./user.model')

async function createUser(req, res) {
// const isUser = UserModel.find(username: req.body.username)
const user = await UserModel.create(req.body)

res.status(200).json(user)
}

module.exports = { createUser }