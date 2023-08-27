import { infopSchema } from "../Schema/infopSchema";
import { prisma } from "../prisma/prismaClient";

export async function createinfop(input: infopSchema) {
    const infop = await prisma.infoPost.create({
            data: input,
        });    
    return infop;
};

