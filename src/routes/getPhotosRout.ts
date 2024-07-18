import { Router } from "express";
import getPhotosController from "../controllers/getPhotosController";

const getPhotosRout = Router();

export default getPhotosRout.get('/', getPhotosController);
