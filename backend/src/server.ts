// server.ts
import fastify, { FastifyInstance } from "fastify";
import healthCheckRoutes from "./routes/healthCheckRoute";
import userRoute from "./routes/userRoute";
const port = 3000;
const app: FastifyInstance = fastify({ logger: true });

healthCheckRoutes(app);
userRoute(app);
const start = async () => {
  try {
    await app.listen(port);
    console.log(`Server listening on port ${port}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

start();
