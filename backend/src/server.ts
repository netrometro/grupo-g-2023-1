// server.ts
import fastify, { FastifyInstance } from "fastify";
import healthCheckRoutes from "./routes/healthCheckRoute";
import userRoute from "./routes/userRoute";
import postRoutes from "./routes/postRoutes";
import categRoutes from "./routes/categRoutes";
import infopRoutes from "./routes/infopRoutes";
import fastifyCors from "@fastify/cors";
const app: FastifyInstance = fastify({ logger: true });
app.register(fastifyCors);

healthCheckRoutes(app);
userRoute(app);
postRoutes(app);
categRoutes(app);
infopRoutes(app);

app
  .listen({
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
    host: "0.0.0.0", //https://ecoaware-cm57.onrender.com
  })
  .then(() => {
    console.log("Servidor rodando na porta 3333🚀");
  });
