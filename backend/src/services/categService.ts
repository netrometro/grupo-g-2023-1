import { categSchema } from "../Schema/categSchema";
import { prisma } from "../prisma/prismaClient";

export async function createCateg(input: categSchema) {
    const categ = await prisma.categoryPost.create({
            data: input,
        });    
    return categ;
};

