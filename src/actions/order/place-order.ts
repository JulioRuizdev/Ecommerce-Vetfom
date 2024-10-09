'use server';

import { auth } from "@/auth.config";
import type { Address } from "@/interfaces";
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


}