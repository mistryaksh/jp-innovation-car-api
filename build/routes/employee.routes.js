"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchEmployeeRoute = void 0;
const express_1 = require("express");
const controller_1 = require("../controller");
exports.BranchEmployeeRoute = (0, express_1.Router)();
exports.BranchEmployeeRoute.get("/employees", controller_1.EmployeeController.GetAllEmployees);
exports.BranchEmployeeRoute.get("/employees/:branchId", controller_1.EmployeeController.GetAllMyEmployees);
exports.BranchEmployeeRoute.post("/employees", controller_1.EmployeeController.NewBranchEmployee);
exports.BranchEmployeeRoute.put("/employees/:id", controller_1.EmployeeController.UpdateBranchEmployee);
exports.BranchEmployeeRoute.delete("/employees/:id", controller_1.EmployeeController.DeleteBranchEmployee);
