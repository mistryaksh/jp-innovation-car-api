"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
exports.BaseRouter = express_1.default.Router();
exports.BaseRouter.get("/", controller_1.BaseControllers.BaseController);
