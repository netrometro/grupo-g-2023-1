import { infopSchema } from "../Schema/infopSchema";
import { prisma } from "../prisma/prismaClient";

export async function createinfop(input: infopSchema) {
    const infop = await prisma.infoPost.create({
            data: input,
        });    
    return infop;
};

export async function listinfop(input: Number){
    
    const infop = await prisma.infoPost.findFirst({
        where: {infopostId: Number(input)}
    })
    if (!infop){
        throw new Error("InfoPost not found")
    }

    return infop;
};

export async function listinfops(){

    const infop = await prisma.infoPost.findMany();
    return infop;
};

