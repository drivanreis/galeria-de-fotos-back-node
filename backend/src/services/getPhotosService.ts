// src/services/getPhotosService.ts

import { v2 as cloudinary } from 'cloudinary';

const getPhotosService = async (): Promise<string[]> => {
  try {
    const resources = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'photos/', // A pasta onde as fotos estão armazenadas
      max_results: 30, // Limita a quantidade de resultados (ajuste conforme necessário)
    });

    const urls = resources.resources.map((resource: { secure_url: string }) => resource.secure_url);
    return urls;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw new Error('Error fetching photos');
  }
};

export default getPhotosService;
