'use server';

import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { auth } from '@/auth.config';

export const createOrUpdateProfile = async (formData: FormData) => {
    const session = await auth();
    if (!session?.user) {
        return { ok: false, message: 'Debe estar autenticado' };
    }

    const userId = session.user.id;

    console.log('ID del usuario de la sesión:', userId); // Para depuración

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const currentPassword = formData.get('currentPassword') as string;
    const newPassword = formData.get('newPassword') as string;

    try {
        // Verificar la contraseña actual
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

        // Preparar datos para actualizar
        const updateData: any = { name, email };
        if (newPassword) {
            updateData.password = await bcrypt.hash(newPassword, 10);
        }

        // Actualizar usuario
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: updateData,
        });

        console.log('Usuario actualizado:', updatedUser); // Para depuración

        return {
            ok: true,
            user: {
                id: updatedUser.id,
                name: updatedUser.name,
                email: updatedUser.email,
                image: updatedUser.image,
            },
        };
    } catch (error) {
        console.error('Error al actualizar el perfil:', error);
        return { ok: false, message: 'Error al actualizar el perfil' };
    }
};
