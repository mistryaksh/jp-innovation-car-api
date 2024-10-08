"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnquiryRoute = void 0;
const express_1 = require("express");
const controller_1 = require("../controller");
exports.EnquiryRoute = (0, express_1.Router)();
exports.EnquiryRoute.get("/enquiry", controller_1.EnquiryController.getMyEnquiry);
exports.EnquiryRoute.post("/enquiry", controller_1.EnquiryController.createEnquiry);
exports.EnquiryRoute.put("/enquiry/:id", controller_1.EnquiryController.updateEnquiry);
exports.EnquiryRoute.delete("/enquiry/:id", controller_1.EnquiryController.deleteEnquiry);
