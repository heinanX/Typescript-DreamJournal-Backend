"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageRouter = void 0;
const express_1 = __importDefault(require("express"));
const language_controller_1 = require("./language.controller");
exports.languageRouter = express_1.default.Router();
exports.languageRouter.get('/', language_controller_1.getLanguages);
exports.languageRouter.get('/:id', language_controller_1.getLanguage);
exports.languageRouter.post('/', language_controller_1.createLanguage);
exports.languageRouter.delete('/:id', language_controller_1.deleteLanguage);
