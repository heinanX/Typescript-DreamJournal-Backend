"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const cat_controller_1 = require("./cat.controller");
exports.categoryRouter = express_1.default.Router();
exports.categoryRouter.get('/', cat_controller_1.getCategories);
exports.categoryRouter.get('/:id', cat_controller_1.getCategory);
exports.categoryRouter.post('/', cat_controller_1.createCategory);
exports.categoryRouter.delete('/:id', cat_controller_1.deleteCategory);
