import UserController from "../controller/userController";
import { FastifyInstance } from "fastify";

export default function (fastify: FastifyInstance) {
  fastify.post("/login", UserController.loginUser);
  fastify.post("/register", UserController.registerUser);
  fastify.get("/getAllUsers", UserController.findAllUsers);
  fastify.post("/deleteUser", UserController.deleteUser);
  fastify.put("/updateUserCo2", UserController.updateUserCO2Emit);
  fastify.get("/getUsersByCo2", UserController.getAllUsersByOrderOfCo2);
}
