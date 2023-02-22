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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLanguage = exports.createLanguage = exports.getLanguage = exports.getLanguages = void 0;
const language_model_1 = require("./language.model");
const getLanguages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getLanguages = getLanguages;
const getLanguage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getLanguage = getLanguage;
const createLanguage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newLanguage = yield language_model_1.LanguageModel.create(req.body);
        res.status(201).json(newLanguage);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createLanguage = createLanguage;
const deleteLanguage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.deleteLanguage = deleteLanguage;
