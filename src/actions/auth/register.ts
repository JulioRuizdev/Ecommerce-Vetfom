'use server';

import prisma from "@/lib/prisma";
import bcryptjs from 'bcryptjs';

export const registerUser = async(name:string, email: string, password: string) => {
    try {
        // Validación de la contraseña
        if (password.length < 6) {
            return {
                ok: false,
                message: 'La contraseña debe tener al menos 6 caracteres'
            }
        }

        const user = await prisma.user.create({
            data: {
                name: name,
                email: email.toLowerCase(),
                password: bcryptjs.hashSync(password),
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        })

        return {
            ok:true,
            user: user,
            message: 'Usuario creado con éxito'
        }
    } catch (error) {
        console.log(error)
    }
    return {
        ok:false,
        message: 'No se pudo crear el usuario'
    }
}
