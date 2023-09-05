import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { User } from "../interfaces/userInterface";
import z from "zod";
import nodemailer from "nodemailer";
const prisma = new PrismaClient();
interface RequestBody {
  email: string;
  co2Emit: number;
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ecoawareauth@gmail.com",
    pass: "boyfddfaqinmczpl",
  },
});

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
      const info = await transporter.sendMail({
        from: '"EcoAware Auth" <ecoawareauth@gmail.com>', // sender address
        to: email,
        subject: "Código de verificação", // Subject line
        text: "Sua conta foi criada com sucesso?", // plain text body
        html: "<b>Sua conta foi criada com sucesso</b>", // html body
      });
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
        return reply.code(401).send({ error: e.issues[0].message });
      } else {
        return reply.code(401).send({ e });
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

  async updateUserCO2Emit(request: FastifyRequest, reply: FastifyReply) {
    const { email, co2Emit } = request.body as any;
    try {
      const user = await prisma.usuario.findUnique({ where: { email } });

      const updatedUser = await prisma.usuario.update({
        where: { email },
        data: { co2Produced: co2Emit },
      });
      console.log(request.body);
      return reply.send(updatedUser);
    } catch (e) {
      return reply.send({ e });
    }
  },
  async getAllUsersByOrderOfCo2(request: FastifyRequest, reply: FastifyReply) {
    try {
      const usersByOrder = await prisma.usuario.findMany({
        where: {
          co2Produced: {
            gt: 0,
          },
        },
        orderBy: {
          co2Produced: "asc",
        },
      });
      return reply.send(usersByOrder);
    } catch (e) {
      return reply.send({ e });
    }
  },
  async updateUserToAdmin(request: FastifyRequest, reply: FastifyReply) {
    const userSchema = z.object({
      email: z.string(),
    });

    try {
      const { email } = userSchema.parse(request.body);

      let isUserAdmin = await prisma.usuario.findUnique({
        where: { email, isAdmin: true },
      });
      if (isUserAdmin) {
        reply.code(401).send("Usuário já é admin");
      } else {
        const userExist = await prisma.usuario.findUnique({ where: { email } });
        if (!userExist) {
          return reply.code(404).send("Usuário não encontrado");
        }
        const updatedUser = await prisma.usuario.update({
          where: { email },
          data: { isAdmin: true },
        });
        if (updatedUser) {
          return reply.send({
            message: "Usuário atualizado para administrador com sucesso",
          });
        } else {
          return reply.send({ error: "Usuário não encontrado" });
        }
      }
    } catch (error) {
      return reply.send(error);
    }
  },
};
