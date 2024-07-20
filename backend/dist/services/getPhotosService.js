"use strict";
// src/services/getPhotosService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const getPhotosService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resources = yield cloudinary_1.v2.api.resources({
            type: 'upload',
            prefix: 'photos/', // A pasta onde as fotos estão armazenadas
            max_results: 30, // Limita a quantidade de resultados (ajuste conforme necessário)
        });
        const urls = resources.resources.map((resource) => resource.secure_url);
        return urls;
    }
    catch (error) {
        console.error('Error fetching photos:', error);
        throw new Error('Error fetching photos');
    }
});
exports.default = getPhotosService;
