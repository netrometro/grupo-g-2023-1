import { FastifyRequest, FastifyReply } from 'fastify';
import prisma from "../utils/prisma";
import { DicaSchema, DicaData } from '../Schema/dicaSchema';
import { EcoDica } from '@prisma/client';

 export async function createDica(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { categoria } = request.body as EcoDica;
    
    
        const dicaData: DicaData = DicaSchema.parse(request.body);
    
        const createdDica = await prisma.ecoDica.create({
            data: {
            ...dicaData,
            categoria,
            },
        });
    
        reply.status(201).send(createdDica);
        } catch (error) {
        reply.status(500).send({ error });
        console.log(error)
        }
    };

 export async function getDica(request: FastifyRequest, reply: FastifyReply) {
    try {
        const dica = await prisma.ecoDica.findMany();
    
        if (dica) {
          return reply.status(200).send(dica);
        } else {
          return reply.status(400).send({ message: "Dica não encontrado" });
        }
      } catch (error) {
        return reply.status(500).send({ message: "Erro interno do servidor" });
      }
    };
    

    export default { 
        createDica, getDica
    };