import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { User } from "../interfaces/userInterface";
import z from "zod";
const prisma = new PrismaClient();
export default {
  async registerUser(request: FastifyRequest, reply: FastifyReply) {
    const userSchema = z.object({
      email: z.string().email({ message: "Email inválido" }),
      password: z
        .string()
        .min(6, { message: "Senha deve conter no mínimo 6 caracteres" }),
    });
    try {
      const { email, password } = userSchema.parse(request.body);

      let user = await prisma.usuario.findUnique({ where: { email } });
      if (user) {
        reply
          .code(401)
          .send({ error: "Já existe um usuário com essas credenciais" });
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
    } catch (e: any) {
      console.log(e);
      if (e.issues && e.issues[0].code === "too_small") {
        return reply.code(401).send({ error: e.issues[0].message }); // Send the custom error message
      } else {
        return reply.code(401).send({ error: "Erro ao realizar o cadastro" });
      }
    }
  },

  async loginUser(request: FastifyRequest, reply: FastifyReply) {
    const userSchema = z.object({
      email: z.string().email(),
      password: z.string(),
    });

    try {
      const { email, password } = userSchema.parse(request.body);

      const user = await prisma.usuario.findUnique({ where: { email } });

      if (!user) {
        return reply.status(404).send({ error: "Usuário não encontrado" });
      }

      const comparePassword = password === user.password;

      if (!comparePassword) {
        return reply.status(401).send({ error: "Senha ou usuário incorretos" });
      }

      return reply.status(200).send({ email, password });
    } catch (e) {
      console.error(e);
      return reply
        .status(500)
        .send({ error: "Ocorreu um erro ao realizar o login" });
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

  async deleteUser(request: FastifyRequest, reply: FastifyReply) {
    const userSchema = z.object({
      email: z.string(),
    });
    try {
      const { email } = userSchema.parse(request.body);

      const user = await prisma.usuario.findUnique({ where: { email } });

      if (!user) {
        return reply.send({ error: "usuario não encontrado" });
      }

      await prisma.usuario.delete({ where: { email } });
      return reply.send({ menssage: "usuario deletado!" });
    } catch (e) {
      return reply.send(e);
    }
  },
};
