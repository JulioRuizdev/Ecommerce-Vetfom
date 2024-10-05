'use server';

import prisma from "@/lib/prisma";
import { Category } from "@prisma/client";


interface PaginationOptions{
    page?: number;
    take?: number;
    category?: Category;
}


export const getPaginatedProductsWithImages = async ({
    page=1,
    take=12,
    category,
}: PaginationOptions) => {

    if( isNaN( Number(page)) ) page=1;
    if( page < 1) page=1;

    try{
        //obtener los productos con sus imagenes
        const products = await prisma.product.findMany({
            take:take,
            skip: (page-1)*take, 
            include: {
                ProductImage: {
                    take:2,
                    select: {
                        url: true
                    },
                },
            },
            where:{
                category: category,
            },
        });

        //obtener el total de paginas

        const totalCount = await prisma.product.count({
            where:{
                category: category,
            },  
        });
        
        const totalPages = Math.ceil(totalCount/take);



        return {
            currentPage:page,
            totalPages: totalPages,
            products: products.map( product => ({
                ...product,
                images: product.ProductImage.map(image => image.url)
            })),
        };

    } catch(error){
        throw new Error('No se pudo obtener los productos');
    }
};