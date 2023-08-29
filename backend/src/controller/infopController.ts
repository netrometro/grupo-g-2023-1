import {FastifyReply, FastifyRequest} from "fastify";
import { infopSchema } from "../Schema/infopSchema";
import { prisma } from "../prisma/prismaClient";

export async function createInfop (
    request: FastifyRequest, 
    reply: FastifyReply){

    try{
        const {
            title, 
            text, 
            categorypostId
        } = request.body as infopSchema;

            const infop = await prisma.infoPost.create({
                data: {
                    title: title,
                    text: text,
                    categorypostId: Number(categorypostId),
                }
            });

        return reply
        .status(201)
        .send(infop);
    } catch(error) {
        return reply
        .status(500)
        .send({ error: "Erro ao criar InfoPost"})
    }
};

export async function getInfop(
    request: FastifyRequest, 
    reply: FastifyReply) {
    
    try{
        const {infopostId} = request.params as infopSchema;

        const infop = await prisma.infoPost.findUnique({
        where: { 
            infopostId: Number(infopostId) },
        });
        
        return reply
        .status(200)
        .send(infop);
    } catch(error){
        return reply
        .status(500)
        .send({ error: "InfoPost não encontrado"})
    }
    
};

export async function getAllInfops(
    request: FastifyRequest, 
    reply: FastifyReply) {
    
    try{
        const infop = await prisma.infoPost.findMany();
        
        return reply
        .status(200)
        .send(infop);
    } catch(error){
        return reply
        .status(500)
        .send({ error: "Erro em listar todos os InfoPost"});
    }
    
};

export async function updateInfop (
    request: FastifyRequest, 
    reply: FastifyReply){

    try {
        const {
            infopostId,
            title,
            text,
            categorypostId
        } = request.body as infopSchema;

        let infop = await prisma.infoPost.findUnique({
            where: {infopostId: Number(infopostId)}
        })

        if(!infop){
            return reply
            .status(404)
            .send({ message: "InfoPost não encontrado."});
        }

        infop = await prisma.infoPost.update({
            where:{
                infopostId: Number(infopostId),
                title: title,
                text: text, 
                categorypostId: Number(categorypostId)}, 
                data: {title, text},
        })

        return reply
        .status(200)
        .send(infop)
    } catch (error) {
        return reply
        .status(500)
        .send({ error: "Não foi possível atualizar InfoPost."})
    }};

export async function deleteInfop(
    request: FastifyRequest, 
    reply: FastifyReply){
        
    try {
        const {infopostId} = request.params as infopSchema;
        const {title, text, categorypostId} = request.body as infopSchema;

        let infop = await prisma.infoPost.findUnique({
            where: {
                infopostId: Number(infopostId),
                title: title,
                text: text,
                categorypostId: Number(categorypostId)}
        })

        if(!infop){
            return reply
            .status(404)
            .send({error: "InfoPost não encontrado."});
        }

        infop = await prisma.infoPost.delete({
            where:{
                infopostId: Number(infopostId),
                title: title,
                text: text, 
                categorypostId: Number(categorypostId)}})
       
        reply.send(infop)
        return reply
        .status(204)
        .send({ message: "InfoPost deletado com sucesso!"});
    } catch (error) {
        return reply
        .status(500)
        .send({ error: "Erro interno do servidor"});
    }
};