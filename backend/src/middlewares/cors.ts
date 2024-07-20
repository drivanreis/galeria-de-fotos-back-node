// src/middleware/cors.ts

import express from 'express';
import cors from 'cors';
import { allowedOrigin }  from '../index';

const configureCors = (): express.RequestHandler => {
  return cors({
    credentials: true,
    origin: allowedOrigin,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
};
const accessControl: express.RequestHandler = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', allowedOrigin);
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
};

const configureApp = (app: express.Application): void => {
  app.use(configureCors());
  app.use(express.json());
  app.use(accessControl);
};

export default configureApp;