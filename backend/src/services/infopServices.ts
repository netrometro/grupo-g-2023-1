import { infopSchema } from "../Schema/infopSchema";
import { prisma } from "../prisma/prismaClient";

export async function createInfop(input: infopSchema) {
    const infop = await prisma.infoPost.create({
            data: input,
        });    
    return infop;
};

export async function listInfop(input: Number){
    
    const infop = await prisma.infoPost.findFirst({
        where: {infopostId: Number(input)}
    })
    if (!infop){
        throw new Error("InfoPost not found")
    }

    return infop;
};

export async function listInfops(){

    const infop = await prisma.infoPost.findMany();
    return infop;
};

export async function updateInfop(infoPostId: Number, body: infopSchema){
    const infop = await prisma.infoPost.findFirst({
        where: {infopostId: Number(infoPostId)},
    });
    if(!infop){
        throw new Error("InfoPost not found");
    }

    const { title, text } = body;

    const update = await prisma.infoPost.update({
        where:{
            infopostId: Number(infoPostId)  
        },
        data:{
            title: title,
            text: text,
        },
    });

};

export async function deleteInfop(input: Number){
    const infopostId = input;
    const infop = await prisma.infoPost.findFirst({
        where: {
            infopostId: Number(infopostId)
        },
    })
    if (!infop){
        throw new Error('InfoPost not found')            
    }
    const deleteinfop = await prisma.infoPost.delete({
        where: infop
    });

    return deleteinfop;

}