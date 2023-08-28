import {FastifyReply, FastifyRequest} from "fastify";
import { infopSchema } from "../Schema/infopSchema";
import { 
    createInfop, 
    listInfop, 
    listInfops, 
    updateInfop,
    deleteInfop, 
 } from "../services/infopService";


export async function registerInfop (
    request: FastifyRequest<{Body: infopSchema}>, 
    reply: FastifyReply){

    const body = request.body;

    try{
        const infop = await createInfop(body)

        return reply
        .status(201)
        .send({message: "InfoPost criado com sucesso!"});
    } catch(error) {
        return reply
        .status(500)
        .send({ message: "Erro interno do servidor"})
    }
};

export async function getInfop(
    request: FastifyRequest, 
    reply: FastifyReply) {
    
    const id = Object(request.params);
    
    try{
        const infop = await listInfop(id.id);
        
        return reply.status(200).send(infop);
    } catch(error){
        return reply
        .status(500)
        .send({ message: "Erro interno do servidor"})
    }
    
};

export async function showAllInfops(
    request: FastifyRequest, 
    reply: FastifyReply) {
    
    try{
        const infop = await listInfops();
        
        return reply.status(200).send(infop);
    } catch(error){
        return reply
        .status(500)
        .send({ message: "Erro interno do servidor"});
    }
    
};

export async function editinfop(
    request: FastifyRequest<{Body:infopSchema}>, 
    reply: FastifyReply) {
    
    const id = Object(request.params);
    
    const body = request.body;
    
    try{
        const infop = await updateInfop(id.id, body);

        return reply
        .status(200)
        .send({ message: "infoPost atualizado com sucesso!"});
    } catch(error){
        return reply
        .status(500)
        .send({ message: "Erro interno do servidor"});
    }
    
};

export async function removeInfop(
    request: FastifyRequest, 
    reply: FastifyReply){
    
    const id = Object(request.params);
    
    try {
        const infop = await deleteInfop(id.id);
       
        return reply
        .status(204)
        .send({ message: "InfoPost deletado com sucesso!"});
    } catch (error) {
        return reply
        .status(500)
        .send({ message: "Erro interno do servidor"});
    }
};