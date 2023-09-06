import { FastifyInstance } from "fastify";
import { 
  createCategory,
  getCategory, 
  getAllCategories, 
  updateCategory,
  deleteCategory 
} from "../controller/categController";

async function categRoutes(fastify: FastifyInstance) {

  fastify.post("/createCateg/:email", createCategory);

  fastify.get("/getCateg/:categorypostId", getCategory);

 fastify.get("/showCategs", getAllCategories);

  fastify.put("/editCateg/:email/:categorypostId", updateCategory);

  fastify.delete("/deleteCateg/:email/:categorypostId", deleteCategory);
}

export default categRoutes;