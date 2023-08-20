import fastify, { FastifyInstance } from "fastify";

export const app: FastifyInstance = fastify({ logger: true });

app.get("/healthCheck", async () => {
  return { status: "ok" };
});

async function main() {
  try {
    await app.listen(3030, "::1");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
main();
