'use server';

import prisma from '@/lib/prisma';
import { z } from 'zod';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config(process.env.CLOUDINARY_URL ?? '');

const userSchema = z.object({
    id: z.string().uuid().optional().nullable(),
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(6),
});

export const createUpdateUserProfile = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    const userParsed = userSchema.safeParse(data);

    if (!userParsed.success) {
        console.log(userParsed.error);
        return { ok: false };
    }

    const user = userParsed.data;
    const { id, ...rest } = user;

    try {
        const prismaTx = await prisma.$transaction(async () => {
            let savedUser;

            if (id) {
                // Actualizar usuario existente
                savedUser = await prisma.user.update({
                    where: { id },
                    data: rest,
                });
            } else {
                // Crear nuevo usuario
                savedUser = await prisma.user.create({
                    data: rest,
                });
            }

            // Procesar y subir imagen si se proporciona
            if (formData.get('image')) {
                const imageFile = formData.get('image') as File;
                const imageUrl = await uploadImage(imageFile);

                if (!imageUrl) {
                    throw new Error('Error al subir la imagen');
                }

                // Actualizar usuario con la URL de la imagen
                await prisma.user.update({
                    where: { id: savedUser.id },
                    data: { image: imageUrl },
                });
            }

            return savedUser;
        });

        return {
            ok: true,
            user: prismaTx,
        };
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'Error al guardar el perfil del usuario',
        };
    }
};

const uploadImage = async (image: File) => {
    try {
        const buffer = await image.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString('base64');

        const uploadResult = await cloudinary.uploader.upload(
            `data:image/png;base64,${base64Image}`
        );

        return uploadResult.secure_url;
    } catch (error) {
        console.log(error);
        return null;
    }
};
