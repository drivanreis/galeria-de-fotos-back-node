import { Request, Response } from 'express';
import getPhotosService from '../services/getPhotosService';

const getPhotosController = async (req: Request, res: Response): Promise<void> => {
  try {
    const urls = await getPhotosService();
    res.json(urls);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default getPhotosController;
