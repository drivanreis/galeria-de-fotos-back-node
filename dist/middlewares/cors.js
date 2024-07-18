"use strict";
// src/middleware/cors.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("../index");
const configureCors = () => {
    return (0, cors_1.default)({
        credentials: true,
        origin: index_1.allowedOrigin,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
};
const accessControl = (_req, res, next) => {
    res.header('Access-Control-Allow-Origin', index_1.allowedOrigin);
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
};
const configureApp = (app) => {
    app.use(configureCors());
    app.use(express_1.default.json());
    app.use(accessControl);
};
exports.default = configureApp;
