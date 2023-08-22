import { FastifyReply, FastifyRequest } from "fastify";

export default {
  async healthCheck(request: FastifyRequest, reply: FastifyReply) {
    return reply.send({ status: "OK" });
  },
};
