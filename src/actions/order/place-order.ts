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
}
