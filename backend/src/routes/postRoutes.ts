import { FastifyInstance } from 'fastify';
import postController from '../controller/postController';


export default function (fastify: FastifyInstance){
    fastify.post("/newQuote", postController.postQuote),
    fastify.put("/updatePost/:userId", postController.updatePost),
    fastify.delete("/delPost/:userId", postController.deletePost)
}