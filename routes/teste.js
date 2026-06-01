import Router from 'express';

export default function TesteRouter(controller) {
    const routes = Router();

    routes.get("/", controller.show);

    return routes;
}