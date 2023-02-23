"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutUser = exports.loginUser = exports.createUser = void 0;
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, mail } = req.body;
        const checkUser = yield user_model_1.UserModel.findOne({ username: username });
        if (!checkUser) {
            const hashedPassword = yield bcrypt_1.default.hash(password, 12);
            const newUser = {
                username: username,
                password: hashedPassword,
                mail: mail
            };
            const user = yield user_model_1.UserModel.create(newUser);
            res.status(200).json(user);
        }
        else {
            return res.status(404).json('Username already taken');
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.createUser = createUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const getUser = yield user_model_1.UserModel.findOne({ username: username });
    if (!getUser) {
        return res.status(404).json('Not a registered User.');
    }
    const match = yield bcrypt_1.default.compare(password, getUser.password);
    if (match) {
        req.session = getUser;
        return res.status(200).json('Successful Login');
    }
    else {
        res.status(404).json('incorrect password');
    }
});
exports.loginUser = loginUser;
const logoutUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    const getUser = yield user_model_1.UserModel.findOne({ username: username });
    req.session = null;
    res.status(200).json(`${username} have been logged out`);
});
exports.logoutUser = logoutUser;
