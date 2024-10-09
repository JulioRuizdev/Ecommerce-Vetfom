'use server';

import prisma from "@/lib/prisma";

export const getUserAddress = async (userId: string) => {
    try {

        const address = await prisma.userAddress.findUnique({
            where: {userId}
        })

        if( !address ) return null;

        const {address2, ...rest} = address;
        
        return {
            ...rest,
            address2: address2 ? address2 : '',
            // user
            
        };
    } catch (error) {
        console.log(error);
        return null;
        
    }
}