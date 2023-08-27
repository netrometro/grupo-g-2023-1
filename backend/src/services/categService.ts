import { categSchema } from "../Schema/categSchema";
import { prisma } from "../prisma/prismaClient";

export async function createCateg(input: categSchema) {
    const categ = await prisma.categoryPost.create({
            data: input,
        });    
    return categ;
};

export async function listCateg(input: Number){
    
    const categ = await prisma.categoryPost.findFirst({
        where: {categorypostId: Number(input)}
    })
    if (!categ){
        throw new Error("category not found")
    }

    return categ;
};

export async function listCategs(){

    const categ = await prisma.categoryPost.findMany();
    return categ;
};

export async function updateCateg(categorypostId: Number, body: categSchema){
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

export async function deleteCateg(input: Number){
    const categorypostId = input;
    const categ = await prisma.categoryPost.findFirst({
        where: {
            categorypostId: Number(categorypostId)
        },
    })
    if (!categ){
        throw new Error('category not found')            
    }
    const deletecateg = await prisma.categoryPost.delete({
        where: categ
    });

    return deletecateg;

}