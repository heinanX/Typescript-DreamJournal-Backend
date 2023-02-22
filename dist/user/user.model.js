"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String },
    password: { type: String },
    isAdmin: { type: Boolean, default: false }
}, { versionKey: false });
exports.UserModel = mongoose_1.models.userSchema || (0, mongoose_1.model)('users', userSchema);
