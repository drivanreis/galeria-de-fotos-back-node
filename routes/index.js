"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/router/index.ts
const express_1 = require("express");
const postUploadRout_1 = __importDefault(require("./postUploadRout"));
const getRaizRout_1 = __importDefault(require("./getRaizRout"));
const getPhotosRout_1 = __importDefault(require("./getPhotosRout"));
const photosRouter = (0, express_1.Router)();
// Registrar as rotas
photosRouter.use(getRaizRout_1.default);
photosRouter.use('/photos', getPhotosRout_1.default);
photosRouter.use('/upload', postUploadRout_1.default);
exports.default = photosRouter;
