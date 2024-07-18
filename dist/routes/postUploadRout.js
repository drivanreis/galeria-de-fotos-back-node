"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postUploadcontroller_1 = __importDefault(require("../controllers/postUploadcontroller"));
const postUploadRout = (0, express_1.Router)();
exports.default = postUploadRout.post('/', postUploadcontroller_1.default);
