"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.entriesRouter = void 0;
const express_1 = __importDefault(require("express"));
const entries_controller_1 = require("./entries.controller");
exports.entriesRouter = express_1.default.Router();
exports.entriesRouter.get('/', entries_controller_1.getEntry);
exports.entriesRouter.get('/:id', entries_controller_1.getEntry);
exports.entriesRouter.post('/entry', entries_controller_1.createEntry);
exports.entriesRouter.delete('/:id', entries_controller_1.deleteEntry);
