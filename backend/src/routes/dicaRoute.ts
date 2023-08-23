import fastify, { FastifyInstance } from "fastify";
import dicaController from "../controller/dicaController";

async function dicaRoutes(server: FastifyInstance) {

    server.post('/createDica', dicaController.createDica);
    server.get('/getDica', dicaController.getDica)

}

export default dicaRoutes;