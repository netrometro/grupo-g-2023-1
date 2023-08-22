import UserController from "../controller/userController";
import { FastifyInstance } from "fastify";

export default function (fastify: FastifyInstance) {
  fastify.post("/login", UserController.loginUser);
  fastify.post("/register", UserController.registerUser);
}
