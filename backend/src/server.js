"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const userRoute_1 = __importDefault(require("./modules/user/userRoute"));
const userSchema_1 = require("./modules/user/userSchema");
const app = fastify();
// app.register(cors, {
//   origin: "*",
//   methods: ["GET", "POST", "PUT", "DELETE"],
// });
// app.get("/healthCheck", async () => {
//   return { status: "ok" };
// });
// const listenOptions = {
//   port: 3030,
//   host: "::1",
// };
// const port = listenOptions.port;
// app.listen(listenOptions, (err, address) => {
//   console.log("Serve rodando na porta🚀 " + port);
// });
// app.register(userRoutes, { prefix: "api/users" });
async function main() {
  for (const schema of userSchema_1.userSchemas) {
    app.addSchema(schema);
  }
  app.register(userRoute_1.default, { prefix: "api/users" });
  try {
    await app.listen({ port: 3030, host: "::1" });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
main();
