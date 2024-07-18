// src/controllers/postUploadcontroller.ts

import { Request, Response } from 'express';
import postUploadService from '../services/postUploadService';

const postUploadController = async (req: Request, res: Response): Promise<void> => {
  await postUploadService(req, res);
};

export default postUploadController;
