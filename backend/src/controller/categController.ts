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

