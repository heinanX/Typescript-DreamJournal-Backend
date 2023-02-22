"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_router_1 = require("./user/user.router");
const entries_router_1 = require("./entries/entries.router");
const cat_route_1 = require("./category/cat.route");
const language_route_1 = require("./language/language.route");
exports.app = (0, express_1.default)();
// -----> insert corsOption into cors' parenthesis if you want to limit endpoints
// const corsOptions = {
//     origin: ['http://localhost:3000/api/journal', 'http://localhost:3000/api/journal/entry']
// }
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.use('/api/users', user_router_1.userRouter);
exports.app.use('/api/journal', entries_router_1.entriesRouter);
exports.app.use('/api/category', cat_route_1.categoryRouter);
exports.app.use('/api/language', language_route_1.languageRouter);
