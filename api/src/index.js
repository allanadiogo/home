import 'dotenv/config'

import admController from './controller/admController.js';

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

// configuracao dos endpoints
server.use(admController);



server.listen(process.env.PORT,() => console.log(`API Conectada na Porta ${process.env.PORT}`));