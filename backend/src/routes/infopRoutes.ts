import { FastifyInstance } from "fastify";
import { createInfop, deleteInfop, getAllInfops, getInfop, updateInfop } from "../controller/infopController";

async function infopRoutes(fastify: FastifyInstance) {

  fastify.post("/createInfop", createInfop);

  fastify.get("/getInfop/:id", getInfop);

  fastify.get("/showInfops", getAllInfops);

  fastify.put("/updateInfop/:id", updateInfop);

  fastify.delete("/deleteInfop/:id", deleteInfop);
}

export default infopRoutes;