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
        .send({message: "Categoria criada com sucesso!"});
    } catch(error) {
        return reply
        .status(500)
        .send({ message: "Erro interno do servidor"})
    }
};

export async function getCateg(
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

export async function showAllCategs(
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

export async function editCateg(
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

export async function removeCateg(
    request: FastifyRequest, 
    reply: FastifyReply){
    
    const id = Object(request.params);
    
    try {
        const categ = await deleteCateg(id.id);
       
        return reply
        .status(204)
        .send({ message: "Categoria deletada com sucesso!"});
    } catch (error) {
        return reply
        .status(500)
        .send({ message: "Erro interno do servidor"});
    }
};