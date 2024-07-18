"use strict";
// scr/services/postUploadService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const multer_1 = __importDefault(require("multer"));
// Configuração do Cloudinary
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: (req, file) => __awaiter(void 0, void 0, void 0, function* () {
        return ({
            folder: 'photos', // Define a pasta onde os arquivos serão armazenados
            allowed_formats: ['jpeg', 'png'], // Define os formatos permitidos
            public_id: file.originalname.split('.')[0], // Define o nome do arquivo no Cloudinary sem extensão
        });
    }),
});
const upload = (0, multer_1.default)({ storage });
const postUploadService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Configura o middleware multer para lidar com o upload do arquivo
        upload.single('photo')(req, res, (err) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                console.error('Error uploading file:', err);
                return res.status(500).send('Error uploading file');
            }
            const file = req.file;
            if (file) {
                return res.json({ url: file.path });
            }
            else {
                return res.status(400).send('No file uploaded');
            }
        }));
    }
    catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).send('Error uploading file');
    }
});
exports.default = postUploadService;
