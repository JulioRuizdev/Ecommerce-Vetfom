'use server';

import { auth } from "@/auth.config";
import type { Address } from "@/interfaces";
import prisma from "@/lib/prisma";
import { ok } from "assert";


interface ProductToOrder{
    productId: string,
    quantity: number
}

export const placeOrder = async( productIds: ProductToOrder[], address: Address) => {

    const session = await auth();
    const userId = session?.user.id;

    if( !userId){
        return{
            ok: false,
            message: 'No hay sesion de usuario'
        }
    }

    //obtener info de los productos

    const products = await prisma.product.findMany({
        where: {
            id: {
                in: productIds.map( p => p.productId)
            }
        }
    });


    // calcular montos
    const itemsInOrder = productIds.reduce( (count, p ) => count + p.quantity, 0 );


    // los totales, subtotal, tax y  total
    const { subTotal, tax, total} = productIds.reduce( (totals, item) => {

        const productQuantity = item.quantity;
        const product = products.find ( product => product.id === item.productId);
        if (!product) throw new Error(`${item.productId} no existe - 500`)
        
        const subTotal = product.price * productQuantity;

        totals.subTotal += subTotal;
        totals.tax += subTotal * 0.18;
        totals.total += subTotal * 1.18;    

        return totals;
    }, {subTotal: 0, tax: 0, total: 0});

    try {

        const prismaTx = await prisma.$transaction( async(tx) => {

            //acualizar el stock
            const updatedProductsPromises = products.map( async (product) => {
    
                //acumular valores 
                const productQuantity = productIds.filter(
                    p => p.productId === product.id
                ).reduce((acc, item) => item.quantity + acc, 0);
    
    
                if( productQuantity === 0) {
                    throw new Error(`No se puede comprar no hay stock de ${product.title}`)
                }
    
                return tx.product.update({
                    where: { id: product.id},
                    data: {
                        // inStock: product.inStock - productQuantity
                        inStock: {
                            decrement: productQuantity  
                        }
    
                    }
                })
            });
    
            const updatedProducts = await Promise.all(updatedProductsPromises);
    
            // verificar valores negativos o no hay suficiente stockk
    
            updatedProducts.forEach( product => {
                if( product.inStock < 0){
                    throw new Error(`No hay suficiente stock de ${product.title}`)
                }
            });
    
    
    
            // crear la orden encabezado detalles
    
            const order = await tx.order.create({
                data: {
                    userId: userId,
                    itemsInOrder: itemsInOrder,
                    subTotal: subTotal,
                    tax: tax,
                    total: total,
    
                    OrderItem: {
                        createMany:{
                            data: productIds.map( p => ({
                                quantity: p.quantity,
                                productId: p.productId,
                                price: products.find( product => product.id === p.productId)?.price ?? 0
                            }))
                        }
                    }
                }
            });
    
    
            // crear la direccion de envio
    
            const {country , ...restAddress} = address;
            const orderAddress = await tx.orderAddress.create({
                data: {
                    ...restAddress,
                    country: country,
                    orderId: order.id,
    
                    }
            });
    
            
    
            return {
                order: order,
                orderAddress: orderAddress,
                updatedProducts: [],
    
            }
    
    
        });

        
        return {
            ok: true,
            order: prismaTx.order.id,
            prismaTx: prismaTx,
        }
        
    } catch (error:any) {
        return {
            ok: false,
            message: error?.message,
        }
    }





}
