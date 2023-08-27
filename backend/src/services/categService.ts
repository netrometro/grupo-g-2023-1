import { categSchema } from "../Schema/categSchema";
import { prisma } from "../prisma/prismaClient";

export async function createCateg(input: categSchema) {
    const categ = await prisma.categoryPost.create({
            data: input,
        });    
    return categ;
};

export async function listcateg(input: Number){
    
    const categ = await prisma.categoryPost.findFirst({
        where: {categorypostId: Number(input)}
    })
    if (!categ){
        throw new Error("category not found")
    }

    return categ;
};

export async function listcategs(){

    const categ = await prisma.categoryPost.findMany();
    return categ;
};

export async function updatecateg(categorypostId: Number, body: categSchema){
    const categ = await prisma.categoryPost.findFirst({
        where: {categorypostId: Number(categorypostId)},
    });
    if(!categ){
        throw new Error("category not found");
    }

    const { name } = body;

    const update = await prisma.categoryPost.update({
        where:{
            categorypostId: Number(categorypostId)  
        },
        data:{
            name: name,
        },
    });

};
