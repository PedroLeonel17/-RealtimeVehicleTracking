import express from 'express';
import veiculoRoutes from './routes/veiculo.js';
import testeRoutes from './routes/teste.js';
import ControllerVeiculos from './controllers/controller_veiculos.js';
import TesteController from './controllers/controller_teste.js';
import testeDBRepository from './Repositories/testeDBRepo.js';
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const app = express();
const testeDBRepo = new testeDBRepository(process.env.DB_PATH);

app.use(express.json());

app.use(cors({
  origin: "http://127.0.0.1:5500"
}));


app.use(veiculoRoutes(new ControllerVeiculos(testeDBRepo)));
app.use(testeRoutes(new TesteController(testeDBRepo)));

export default app;