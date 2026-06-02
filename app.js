import express from 'express';
import postgres from 'postgres';
import veiculoRoutes from './routes/veiculo.js';
import testeRoutes from './routes/teste.js';
import ControllerVeiculos from './controllers/controller_veiculos.js';
import TesteController from './controllers/controller_teste.js';
import sqlite3Repository from './Repositories/sqlite3Repository.js';
import postgressRepository from './Repositories/postgressRepository.js';
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const app = express();



const db_path = process.env.NODE_ENV === "development" ? process.env.DB_PATH : process.env.POSTGRES_URL;
let db;

if (process.env.NODE_ENV === 'development') {
    const sqlite = await import('sqlite3');
    db = sqlite.default;
} else {
    db = postgres(process.env.POSTGRES_URL);
}
const myRepo = process.env.NODE_ENV === "development" ? new sqlite3Repository(db) : new postgressRepository(db);

app.use(express.json());

app.use(cors({
  origin: "http://127.0.0.1:5500"
  
},{
  origin: "https://realtimevehicletracking-frontend.onrender.com"
}));


app.use(veiculoRoutes(new ControllerVeiculos(myRepo)));
app.use(testeRoutes(new TesteController(myRepo)));

export default app;