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

        return reply.code(201).send(categ);
    } catch (e){
        console.log(e);
        return reply.send(e);
    }
}


export async function findCateg(request: FastifyRequest, reply: FastifyReply) {
    const id = Object(request.params);
    try{
        const categ = await listCateg(id.id);
        
        return reply.code(201).send(categ);
    } catch(error){
        return reply.send(error)
    }
    
}

export async function findcategs(request: FastifyRequest, reply: FastifyReply) {
    try{
        const categ = await listCategs();
        
        return reply.code(201).send(categ);
    } catch(error){
        return reply.send(error);
    }
    
}

export async function upgradecateg(request: FastifyRequest<{Body:categSchema}>, reply: FastifyReply) {
    const id = Object(request.params);
    const body = request.body;
    try{
        const categ = await updateCateg(id.id, body);

        return reply.code(201).send(categ);
    } catch(error){
        return reply.send(error);
    }
    
}

export async function removecateg(
    request: FastifyRequest,
    reply: FastifyReply){
    const id = Object(request.params);
    try {
        const categ = await deleteCateg(id.id);
        return reply.code(201).send(categ);
    } catch (error) {
        console.log(error);
        return reply.send(error);
    }
}