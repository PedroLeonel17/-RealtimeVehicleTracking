import { Router } from 'express';
import ControllerVeiculos from '../controllers/controller_veiculos.js';

export default function veiculosRoutes(controller) {
    const routes = Router();

    routes.post("/veiculos", controller.create);

    return routes;
}