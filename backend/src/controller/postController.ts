import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { Quote } from '../interfaces/postInterfaces';
const prisma = new PrismaClient();

export default{
    async postQuote (request: FastifyRequest, reply: FastifyReply){
        try{
            const {quote, userId} = request.body as Quote;
            const post = await prisma.post.create({
                data: {
                    quote,
                    userId,
                }
            });
            reply.send(post)
            return reply.send({ msg: "Postado!" });
        } catch (e){
            console.log(e);
            return reply.send({ error: "Não foi possível realizar a postagem" });
        }
    },

    async updatePost (request: FastifyRequest, reply: FastifyReply){
        try {
            const {userId} = request.params as Quote;
            const {postId, quote} = request.body as Quote;

            let post = await prisma.post.findUnique({
                where: {postId: postId, userId: Number(userId)}
            })

            if(!post){
                return reply.send({error: "Postagem não encontrada."});
            }

            post = await prisma.post.update({
                where:{postId, userId: Number(userId)}, data: {quote}
            })

            reply.send(post)
            return reply.send({msg: "Post Atualizado!"})

        } catch (error) {
            console.log(error)
            return reply.send({error: "Não foi possível atualizar a postagem."})
        }
    },

    async deletePost(req: FastifyRequest, res: FastifyReply){
        try {
            const {userId} = req.params as Quote;
            const {postId} = req.body as Quote;

            let post = await prisma.post.findUnique({
                where: {postId: postId, userId: Number(userId)}
            })

            if(!post){
                return res.send({error: "Postagem não encontrada."});
            }

            post = await prisma.post.delete({where:{postId, userId: Number(userId)}})

            return res.send({msg: "Post deletado!"})
        } catch (error) {
            console.log(error)
            return res.send({ error: "Impossível deletar postagem."})
        }
    },

    async showPost(req: FastifyRequest, res: FastifyReply){
        try {
            const {userId} = req.params as Quote;
            const {postId} = req.body as Quote;

            const post = await prisma.post.findUnique({
                where: {postId: postId, userId: Number(userId)}
            })

            if(!post){
                return res.send({error: "Postagem não encontrada."});
            }

            res.send(post)
            return res.send({msg: "Aqui está a sua postagem."})
        } catch (error) {
            console.log(error)
            return res.send({error: "Não foi possível visualizar a postagem."})
        }
    },

    async showAllPosts(req: FastifyRequest, res: FastifyReply){
        try {

            const posts = await prisma.post.findMany()

            if(!posts){
                return res.send({error: "Postagens não encontradas."});
            }

            res.send(posts)
            return res.send({msg: "Aqui estão os posts mais novos."})
        } catch (error) {
            console.log(error)
            return res.send({error: "Não foi possível mostrar os posts mais novos."})
        }
    }
}