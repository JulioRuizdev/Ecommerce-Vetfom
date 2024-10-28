"use server";

import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { auth } from '@/auth.config';
import { revalidatePath } from 'next/cache';

export const createOrUpdateProfile = async (formData: FormData) => {
    const session = await auth();
    if (!session?.user) {
        return { ok: false, message: 'Debe estar autenticado' };
    }

    const userId = session.user.id;

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const currentPassword = formData.get('currentPassword') as string;
    const newPassword = formData.get('newPassword') as string;

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            return { ok: false, message: 'Usuario no encontrado' };
        }

        if (currentPassword) {
            const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
            if (!isPasswordValid) {
                return { ok: false, message: 'Contraseña actual incorrecta' };
            }
        }

        const updateData: any = { name, email };
        if (newPassword) {
            updateData.password = await bcrypt.hash(newPassword, 10);
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: updateData,
        });

        // Revalida la ruta de perfil del usuario
        revalidatePath(`/profile/`);

        return {
            ok: true,
            user: {
                id: updatedUser.id,
                name: updatedUser.name,
                email: updatedUser.email,
                image: null,
            },
        };
    } catch (error) {
        console.error('Error al actualizar el perfil:', error);
        return { ok: false, message: 'Error al actualizar el perfil' };
    }
};
