import { FastifyInstance } from "fastify";
import {
    registerInfop,
    getInfop,
    showAllInfops,
    editInfop,
    removeInfop,
} from "../controller/infopController";

async function infopRoutes(fastify: FastifyInstance) {

  fastify.post("/createInfop", registerInfop);

  fastify.get("/getInfop/:id", getInfop);

  fastify.get("/showInfops/:id", showAllInfops);

  fastify.put("/editInfop/:id", editInfop);

  fastify.delete("/deleteInfop/:id", removeInfop);
}

export default infopRoutes;