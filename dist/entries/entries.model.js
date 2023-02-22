"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryModel = void 0;
const mongoose_1 = require("mongoose");
const entrySchema = new mongoose_1.Schema({
    title: { type: String, require: true },
    entry: { type: String, require: true },
}, { timestamps: true, versionKey: false });
exports.EntryModel = mongoose_1.models.entries || (0, mongoose_1.model)('entries', entrySchema);
