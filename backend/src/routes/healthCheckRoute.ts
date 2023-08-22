// healthCheckRoutes.ts
import { FastifyInstance } from "fastify";
import healthCheckController from "../controller/healthCheckController";

export default function (fastify: FastifyInstance) {
  fastify.get("/healthCheck", healthCheckController.healthCheck);
}
