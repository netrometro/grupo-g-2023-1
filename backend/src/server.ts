// server.ts
import fastify, { FastifyInstance } from "fastify";
import healthCheckRoutes from "./routes/healthCheckRoute";
import userRoute from "./routes/userRoute";
const app: FastifyInstance = fastify({ logger: true });

healthCheckRoutes(app);
userRoute(app);

app
  .listen({
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("Servidor rodando na porta 3333🚀");
  });
