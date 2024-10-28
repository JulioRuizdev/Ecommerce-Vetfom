'use server';

import prisma from "@/lib/prisma";

export const getUserById = async (id: string) => {
    try {
        const user = await prisma.user.findFirst({
            include: {
                UserImage: true,
            },
            where: {
                id: id,
            },
        });

        if (!user) return null;

        return {
            ...user,
            images: user.UserImage.map((image) => image.url), // Mapea las URLs de las imágenes
        };
    } catch (error) {
        console.log("Error al obtener el usuario:", error);
        throw new Error("Error al obtener el usuario");
    }
};
