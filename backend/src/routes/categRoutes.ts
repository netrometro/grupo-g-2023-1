import { FastifyInstance } from "fastify";
import { 
  createCateg,
  getCateg, 
  getAllCategs, 
  updateCateg,
  deleteCateg 
} from "../controller/categController";

async function categRoutes(fastify: FastifyInstance) {

  fastify.post("/createCateg", createCateg);

  fastify.get("/getCateg/:id", getCateg);

 fastify.get("/showCategs", getAllCategs);

  fastify.put("/editCateg/:id", updateCateg);

  fastify.delete("/deleteCateg/:id", deleteCateg);
}

export default categRoutes;