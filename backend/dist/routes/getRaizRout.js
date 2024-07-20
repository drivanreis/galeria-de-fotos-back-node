"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const express_1 = require("express");
const index_2 = require("../index");
const getRaizRout = (0, express_1.Router)();
getRaizRout.get('/', (req, res) => {
    res.send(`Backend Rodando na porta ${index_2.backPort}! E a origem permitida é: ${index_1.allowedOrigin}`);
});
exports.default = getRaizRout;
