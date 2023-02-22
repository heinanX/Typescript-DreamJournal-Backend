"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    category: { type: String, require: true },
}, { versionKey: false });
exports.CategoryModel = mongoose_1.models.categories || (0, mongoose_1.model)('categories', categorySchema);
