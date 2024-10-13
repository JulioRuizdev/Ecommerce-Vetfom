'use server';

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";


export const getOrderById = async (Id: string) => {
    const session = await auth();

    if( !session?.user){
        return {
            ok: false,
            message: 'Debe estar autenticado'
        }
    }

    try {
        const order = await prisma.order.findUnique({
            where: { id: Id },
            include: {
                OrderAddress: true,
                OrderItem: {
                    select: {
                        price: true,
                        quantity: true,

                        product:{
                            select:{
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true,
                                    },
                                    take: 1,
                                }
                            }
                        },
                    }
                },
            }
        });

        if( !order) throw new Error(`${Id} no encontrado`);
        return{
            ok: true,
            order: order,
        }

        if(session?.user.role === 'user'){
            if(session?.user.id !== order?.userId){
                throw `${Id} no es de ese usuario`
            }
        }
        
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'Orden no existe',
        }
        
    }

}