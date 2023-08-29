import {FastifyReply, FastifyRequest} from "fastify";
import { categSchema } from '../Schema/categSchema';
import { prisma } from "../prisma/prismaClient";

export async function createCateg (
    request: FastifyRequest, 
    reply: FastifyReply){

    try{
        const {name} = request.body as categSchema;
        const categ = await prisma.categoryPost.create({
            data: {
                name: name,
            }
        });

        return reply
        .status(201)
        .send(categ);
    } catch (error){
        return reply
        .status(500)
        .send({ error: "Não foi possível realizar a categagem" });
    }
}
export async function getCateg (
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

export async function getAllCategs(
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
        .send({ message: "Ocorreu um erro ao procurar todos as categorias",
        });
    }};

export async function updateCateg (
    request: FastifyRequest, 
    reply: FastifyReply){

    try {
        const {name, categorypostId} = request.body as categSchema;

        let categ = await prisma.categoryPost.findUnique({
            where: {categorypostId: Number(categorypostId)}
        })

        if(!categ){
            return reply
            .status(404)
            .send({ message: "Categoria não encontrada."});
        }

        categ = await prisma.categoryPost.update({
            where:{
                name: name, 
                categorypostId: Number(categorypostId)}, 
                data: {name}
        })

        return reply
        .status(200)
        .send({ message: "Categoria atualizada com sucesso!"})
    } catch (error) {
        return reply
        .status(500)
        .send({ error: "Não foi possível atualizar a categoria."})
    }};

export async function deleteCateg(
    request: FastifyRequest, 
    reply: FastifyReply){
    
        try {
        const {categorypostId} = request.params as categSchema;
        const {name} = request.body as categSchema;

        let categ = await prisma.categoryPost.findUnique({
            where: {
                name: name, 
                categorypostId: Number(categorypostId)}
        })

        if(!categ){
            return reply
            .status(404)
            .send({error: "Categoria não encontrada."});
        }

        categ = await prisma.categoryPost.delete({
            where:{
                name: name, 
                categorypostId: Number(categorypostId)}})

        return reply
        .status(203)
        .send({message: "Categoria deletada com sucesso!"})
    } catch (error) {
        return reply
        .status(500)
        .send({ error: "Não foi possível deletar categoria."})
    }};