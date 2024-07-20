"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.backPort = exports.allowedOrigin = void 0;
// src/index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("./middlewares/cors"));
const routes_1 = __importDefault(require("./routes"));
exports.allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:3000';
exports.backPort = process.env.BACK_PORT || 3001;
const app = (0, express_1.default)();
// Middlewares
(0, cors_1.default)(app);
// Routes
app.use(routes_1.default);
// Start the server
app.listen(exports.backPort, () => {
    console.log(`Backend Rodando na porta ${exports.backPort}! E a origem permitida é: ${exports.allowedOrigin}`);
});
