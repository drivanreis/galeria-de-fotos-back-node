// scr/services/postUploadService.ts

import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import { Request, Response } from 'express';

// Configuração do Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => ({
    folder: 'photos', // Define a pasta onde os arquivos serão armazenados
    allowed_formats: ['jpeg', 'png'], // Define os formatos permitidos
    public_id: file.originalname.split('.')[0], // Define o nome do arquivo no Cloudinary sem extensão
  }),
});

const upload = multer({ storage });

const postUploadService = async (req: Request, res: Response): Promise<void> => {
  try {
    // Configura o middleware multer para lidar com o upload do arquivo
    upload.single('photo')(req, res, async (err) => {
      if (err) {
        console.error('Error uploading file:', err);
        return res.status(500).send('Error uploading file');
      }

      const file = req.file;
      if (file) {
        return res.json({ url: file.path });
      } else {
        return res.status(400).send('No file uploaded');
      }
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Error uploading file');
  }
};

export default postUploadService;
