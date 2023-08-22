import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { User } from "../interfaces/userInterface";
const prisma = new PrismaClient();
export default {
  async registerUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { email, password } = request.body as User;

      let user = await prisma.usuario.findUnique({ where: { email } });

      if (user) {
        reply.send({ error: "Já existe um usuário com essas credenciais" });
      } else {
        await prisma.usuario.create({
          data: {
            email,
            password,
          },
        });
      }
      reply.send({ email, password });
      return reply.send({ msg: "Cadastrado" });
    } catch (e) {
      console.log(e);
      return reply.send({ error: "Ocorreu um erro ao cadastrar o usuário" });
    }
  },

  async loginUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { email, password } = request.body as User;

      const user = await prisma.usuario.findUnique({ where: { email } });

      if (!user) {
        return reply.send({ error: "Usuário não encontrado" });
      }

      const comparePassword = password === user.password;

      if (!comparePassword) {
        return reply.send({ error: "Senha ou usuário incorretos" });
      }
      return reply.send({ msg: "Logado" });
    } catch (e) {
      console.error(e);
      return reply.send({ error: "Ocorreu um erro ao realizar o login" });
    }
  },

  async findUniqueUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { userId } = request.params as User;

      const user = await prisma.usuario.findUnique({
        where: { userId: userId },
      });

      if (!user) {
        reply.send({ error: "Usuário não encontrado" });
      }
    } catch (e) {
      console.error(e);
      return reply.send({ error: "Ocorreu um erro ao procurar este usuário" });
    }
  },
  async findAllUsers(request: FastifyRequest, reply: FastifyReply) {
    try {
      const users = await prisma.usuario.findMany();
      return reply.send(users);
    } catch (e) {
      return reply.send({
        error: "Ocorreu um erro ao procurar todos os usuários",
      });
    }
  },
};
