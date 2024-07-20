// src/router/index.ts
import { Router } from 'express';
import postUploadRout from './postUploadRout';
import getRaizRout from './getRaizRout';
import getPhotosRout from './getPhotosRout';

const photosRouter = Router();

// Registrar as rotas
photosRouter.use(getRaizRout);
photosRouter.use('/photos', getPhotosRout);
photosRouter.use('/upload', postUploadRout);

export default photosRouter;
