import {FastifyReply, FastifyRequest} from "fastify";
import { 
    createCateg, 
    deleteCateg, 
    listCateg, 
    listCategs, 
    updateCateg
 } from "../services/categService";
import { categSchema } from "../Schema/categSchema";

export async function registerCateg (
    request: FastifyRequest<{Body: categSchema}>, 
    reply: FastifyReply){

    const body = request.body;

    try{
        const categ = await createCateg(body)

        return reply
        .status(201)
        .send(categ)
        .send({message: "Categoria criada com sucesso!"});
    } catch(error) {
        return reply
        .status(500)
        .send({ message: "Erro interno do servidor"})
    }
};

export async function findCateg(
    request: FastifyRequest, 
    reply: FastifyReply) {
    
    const id = Object(request.params);
    
    try{
        const categ = await listCateg(id.id);
        
        return reply.status(200).send(categ);
    } catch(error){
        return reply
        .status(500)
        .send({ message: "Erro interno do servidor"})
    }
    
};

export async function findCategs(
    request: FastifyRequest, 
    reply: FastifyReply) {
    
    try{
        const categ = await listCategs();
        
        return reply.status(200).send(categ);
    } catch(error){
        return reply
        .status(500)
        .send({ message: "Erro interno do servidor"});
    }
    
};

export async function upgradeCateg(
    request: FastifyRequest<{Body:categSchema}>, 
    reply: FastifyReply) {
    
    const id = Object(request.params);
    
    const body = request.body;
    
    try{
        const categ = await updateCateg(id.id, body);

        return reply
        .status(200)
        .send({ message: "Categoria atualizada com sucesso!"});
    } catch(error){
        return reply
        .status(500)
        .send({ message: "Erro interno do servidor"});
    }
    
};

