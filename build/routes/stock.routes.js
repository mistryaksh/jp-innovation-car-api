"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockRoute = void 0;
const express_1 = require("express");
const controller_1 = require("../controller");
exports.StockRoute = (0, express_1.Router)();
exports.StockRoute.get("/stock", controller_1.StockController.GetMyStock);
exports.StockRoute.post("/stock", controller_1.StockController.CreateNewStock);
exports.StockRoute.put("/stock/:id", controller_1.StockController.UpdateStock);
exports.StockRoute.delete("/stock/:id", controller_1.StockController.DeleteStock);
exports.StockRoute.get("/stock/:id", controller_1.StockController.GetStockById);
