import {FastifyReply, FastifyRequest} from "fastify";
import { infopSchema } from "../Schema/infopSchema";
import { prisma } from "../prisma/prismaClient";

const isAdmin = (request: FastifyRequest) => {
    const userIsAdmin = true;
    return userIsAdmin;}

export async function createInfop (
    request: FastifyRequest, 
    reply: FastifyReply){

        if (!isAdmin(request)) {
            return reply
                .status(403)
                .send({ error: "Permissão negada. Apenas administradores podem criar categorias." });
        }

    try {
        const { 
            title, 
            text, 
         } = request.body as infopSchema;

        const infop = await prisma.infoPost.create({
            data: {
                title: title,
                text: text,
            },
        });

        return reply
            .status(201)
            .send(infop);
    } catch (error) {
        return reply
            .status(500)
            .send({ error: "Erro ao criar InfoPost" });
    }
}

export async function getInfop(
    request: FastifyRequest, 
    reply: FastifyReply) {

    try{
        const {infopostId} = request.params as infopSchema;

        const infop = await prisma.infoPost.findUnique({
            where: {
                infopostId: Number(infopostId),
            },
        });

        if (!infop) {
            return reply
                .status(404)
                .send({ error: "InfoPost não encontrado" });
        }

        return reply
            .status(200)
            .send(infop);
    } catch (error) {
        return reply
            .status(500)
            .send({ error: "Erro interno do servidor" });
    }
}

export async function getAllInfops(
    request: FastifyRequest, 
    reply: FastifyReply) {

    try{
        const infop = await prisma.infoPost.findMany();
        
        return reply
            .status(200)
            .send(infop);
    } catch (error) {
        return reply
            .status(500)
            .send({ error: "Erro em listar todos os InfoPosts" });
    }
}

export async function updateInfop (
    request: FastifyRequest, 
    reply: FastifyReply){

        if (!isAdmin(request)) {
            return reply
                .status(403)
                .send({ error: "Permissão negada. Apenas administradores podem criar categorias." });
        }

    try {
        const { infopostId, title, text } = request.body as infopSchema;

        let infop = await prisma.infoPost.findUnique({
            where: { infopostId: Number(infopostId) },
        });

        if (!infop) {
            return reply
                .status(404)
                .send({ error: "InfoPost não encontrado." });
        }

        infop = await prisma.infoPost.update({
            where: {
                infopostId: Number(infopostId),
                title: title,
                text: text,
            },
            data: { title, text },
        });

        return reply
            .status(200)
            .send(infop);
    } catch (error) {
        return reply
            .status(500)
            .send({ error: "Não foi possível atualizar InfoPost." });
    }
}

export async function deleteInfop(
    request: FastifyRequest, 
    reply: FastifyReply){
        
        if (!isAdmin(request)) {
            return reply
                .status(403)
                .send({ error: "Permissão negada. Apenas administradores podem criar categorias." });
        }

    try {
        const { infopostId, title, text } = request.body as infopSchema;

        let infop = await prisma.infoPost.findUnique({
            where: {
                infopostId: Number(infopostId),
                title: title,
                text: text,
            },
        });

        if (!infop) {
            return reply
                .status(404)
                .send({ error: "InfoPost não encontrado." });
        }

        infop = await prisma.infoPost.delete({
            where: {
                infopostId: Number(infopostId),
                title: title,
                text: text,
            },
        });

        return reply
            .status(204)
            .send({ message: "InfoPost deletado com sucesso!" });
    } catch (error) {
        return reply
            .status(500)
            .send({ error: "Erro interno do servidor" });
    }
}
