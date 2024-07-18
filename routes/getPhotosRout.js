"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getPhotosController_1 = __importDefault(require("../controllers/getPhotosController"));
const getPhotosRout = (0, express_1.Router)();
exports.default = getPhotosRout.get('/', getPhotosController_1.default);
