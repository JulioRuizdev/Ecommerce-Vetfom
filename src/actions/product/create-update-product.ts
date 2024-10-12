'use server';

import prisma from '@/lib/prisma';
import { Product, Section } from '@prisma/client';
import {z} from 'zod';

const productSchema = z.object({
    id: z.string().uuid().optional().nullable(),
    title: z.string().min(3).max(255),
    slug: z.string().min(3).max(255),
    description: z.string(),
    price: z.coerce.number().min(0).transform(val => Number(val.toFixed(2))),
    inStock: z.coerce.number().min(0).transform(val => Number(val.toFixed(2))),
    tags: z.string(),
    section: z.nativeEnum(Section),
    categoryId: z.string().uuid(),
});

export const createUpdateProduct = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    const productParsed = productSchema.safeParse(data);

    if(!productParsed.success){
        console.log(productParsed.error);
        return {ok: false};
    }

    const product = productParsed.data;
    product.slug = product.slug.toLowerCase().replace(/ /g, '-').trim();

    const {id, ...rest} = product;

    const prismaTx = await prisma.$transaction(async (tx) => {

        let product: Product;
        const tagsArray = rest.tags.split(',').map(tag => tag.trim().toLowerCase());
        if (id){

            product = await prisma.product.update({
                where: {id},
                data: {
                    ...rest,
                    tags:{
                        set: tagsArray
                    }
                },
            })

        }else{
            //crear producto
            product = await prisma.product.create({
                data: {
                    ...rest,
                    tags:{
                        set: tagsArray
                    }
                }
            });
        }


        return {
            product

        }
    });

    return {ok: true};
}
