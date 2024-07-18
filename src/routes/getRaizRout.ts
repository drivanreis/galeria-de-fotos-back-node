import { allowedOrigin }  from '../index';
import { Router } from 'express';
import { backPort } from '../index';

const getRaizRout = Router();

getRaizRout.get('/', (req, res) => {
  res.send(`Backend Rodando na porta ${backPort}! E a origem permitida é: ${allowedOrigin}`);
});

export default getRaizRout;