// src/index.ts
import express from 'express';
import configureApp  from './middlewares/cors';
import photosRouter from './routes';

export const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:3000';
export const backPort =  process.env.BACK_PORT || 3001;

const app = express();

// Middlewares
configureApp(app);

// Routes
app.use(photosRouter);

// Start the server

app.listen(backPort, () => {
  console.log(`Backend Rodando na porta ${backPort}! E a origem permitida é: ${allowedOrigin}`);
});
