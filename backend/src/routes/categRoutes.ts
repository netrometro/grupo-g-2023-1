import { FastifyInstance } from "fastify";
import {
    registerCateg,
    getCateg,
    showAllCategs,
    editCateg,
    removeCateg,
} from "../controller/categController";

async function categRoutes(fastify: FastifyInstance) {

  fastify.post("/createCateg", registerCateg);

  fastify.get("/getCateg/:id", getCateg);

  fastify.get("/showCategs/:id", showAllCategs);

  fastify.put("/editCateg/:id", editCateg);

  fastify.delete("/deleteCateg/:id", removeCateg);
}

export default categRoutes;