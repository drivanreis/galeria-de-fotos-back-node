import { Router } from "express";
import postUploadController from "../controllers/postUploadcontroller";

const postUploadRout = Router();


export default postUploadRout.post('/', postUploadController);