import { FastifyInstance } from "fastify";
import { createInfop, deleteInfop, getAllInfops, getInfop, updateInfop } from "../controller/infopController";

async function infopRoutes(fastify: FastifyInstance) {

  fastify.post("/createInfop/:email", createInfop);

  fastify.get("/getInfop/:infopostId", getInfop);

  fastify.get("/showInfops", getAllInfops);

  fastify.put("/updateInfop/:email/:infopostId", updateInfop);

  fastify.delete("/deleteInfop/:email/:infopostId", deleteInfop);
}

export default infopRoutes;