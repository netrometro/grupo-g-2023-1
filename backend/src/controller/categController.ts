import {FastifyReply, FastifyRequest} from "fastify";
import { categSchema } from '../Schema/categSchema';
import { prisma } from "../prisma/prismaClient";
import { User } from "../interfaces/userInterface";

export async function createCategory(request: FastifyRequest, reply: FastifyReply) {
    const { email } = request.params as User;

    const user = await prisma.usuario.findUnique({
        where: { email: email },
    });

    if (!user) {
        return reply
            .status(404)
            .send({ error: "Usuário não encontrado." });
    }

    if (!user.isAdmin) {
        return reply
            .status(403)
            .send({ error: "Apenas administradores podem criar categorias." });
    }

    try {
        const { name } = request.body as categSchema;

        const category = await prisma.categoryPost.create({
            data: {
                name: name,
            },
        });

        return reply
            .status(201)
            .send(category);
    } catch (error) {
        return reply
            .status(500)
            .send({ error: "Não foi possível criar a categoria." });
    }
}


export async function getCategory (
    request: FastifyRequest, 
    reply: FastifyReply){

    try{
        const {categorypostId} = request.params as categSchema;

        const categ = await prisma.categoryPost.findUnique({
        where: { 
            categorypostId: Number(categorypostId) },
        });

     return reply
        .status(200)
        .send(categ);
    } catch (error) {
        return reply
        .status(500)
        .send({ message: "Não foi possível encontrar essa categoria"});
    }};

export async function getAllCategories(
    request: FastifyRequest, 
    reply: FastifyReply) {

    try {
        const categ = await prisma.categoryPost.findMany();
        
        return reply
        .status(200)
        .send(categ);
    } catch (error) {
        return reply
        .status(500)
        .send({ message: "Erro em listar todas as categorias",
        });
    }};

export async function updateCategory(
    request: FastifyRequest, 
    reply: FastifyReply) {
    const { email } = request.params as User;

    const user = await prisma.usuario.findUnique({
        where: { email: email },
    });

    if (!user) {
        return reply
            .status(404)
            .send({ error: "Usuário não encontrado." });
    }

    if (!user.isAdmin) {
        return reply
            .status(403)
            .send({ error: "Apenas administradores podem atualizar categorias." });
    }

    try {
        const { name, categorypostId } = request.body as categSchema;

        let category = await prisma.categoryPost.findUnique({
            where: { categorypostId: Number(categorypostId) },
        });

        if (!category) {
            return reply
                .status(404)
                .send({ error: "Categoria não encontrada." });
        }

        category = await prisma.categoryPost.update({
            where: {
                categorypostId: Number(categorypostId),
            },
            data: { name },
        });

        return reply
            .status(200)
            .send(category);
    } catch (error) {
        return reply
            .status(500)
            .send({ error: "Não foi possível atualizar a categoria." });
    }
}

export async function deleteCategory(
    request: FastifyRequest, 
    reply: FastifyReply) {

    const { email } = request.params as User;

    const user = await prisma.usuario.findUnique({
        where: { email: email },
    });

    if (!user) {
        return reply
            .status(404)
            .send({ error: "Usuário não encontrado." });
    }

    if (!user.isAdmin) {
        return reply
            .status(403)
            .send({ error: "Apenas administradores podem excluir categorias." });
    }

    try {
        const { categorypostId } = request.params as categSchema;

        let category = await prisma.categoryPost.findUnique({
            where: {
                categorypostId: Number(categorypostId),
            },
        });

        if (!category) {
            return reply
                .status(404)
                .send({ error: "Categoria não encontrada." });
        }

        await prisma.categoryPost.delete({
            where: {
                categorypostId: Number(categorypostId),
            },
        });

        return reply
                .status(204)
                .send({ message: "Categoria deletada com sucesso!" });
    } catch (error) {
        return reply
                .status(500)
                .send({ error: "Não foi possível excluir a categoria." });
    }
}
