const { Schema, model, models } = require('mongoose')

const userSchema = new Schema({
    username: { type: String},
    password:{ type: String},
    isAdmin: { type: Boolean, default: false}
}, { versionKey: false })

const UserModel = models.userSchema || model('users', userSchema)

module.exports = { UserModel }