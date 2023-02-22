import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
    username: { type: String},
    password:{ type: String},
    isAdmin: { type: Boolean, default: false}
}, { versionKey: false })

export const UserModel = models.userSchema || model('users', userSchema)