const { UserModel } = require('./user.model')

async function createUser(req, res) {
const user = await UserModel.create(req.body)

res.status(200).json(user)
}

module.exports = { createUser }