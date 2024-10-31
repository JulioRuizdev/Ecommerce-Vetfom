// actions/auth-actions.ts
"use server";

import { revalidatePath } from 'next/cache';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { auth } from '@/auth.config';

export const createOrUpdateProfile = async (formData: FormData) => {
  try {
    const session = await auth();
    if (!session?.user) {
      return { ok: false, message: 'Debe estar autenticado' };
    }

    const userId = session.user.id;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const currentPassword = formData.get('currentPassword') as string;
    const newPassword = formData.get('newPassword') as string;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, password: true }
    });

    if (!user) {
      return { ok: false, message: 'Usuario no encontrado' };
    }

    // Verificar contraseña actual si se proporciona
    if (currentPassword) {
      const isPasswordValid = await bcrypt.compare(currentPassword, user.password!);
      if (!isPasswordValid) {
        return { ok: false, message: 'Contraseña actual incorrecta' };
      }
    }

    // Preparar datos de actualización
    const updateData: any = {
      name,
      email,
    };

    // Actualizar contraseña si se proporciona una nueva
    if (newPassword) {
      updateData.password = await bcrypt.hash(newPassword, 10);
    }

    // Actualizar usuario
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    // Revalidar las rutas necesarias
    revalidatePath('/profile');
    revalidatePath('/');
    
    return {
      ok: true,
      user: updatedUser
    };

  } catch (error) {
    console.error('Error al actualizar el perfil:', error);
    return {
      ok: false,
      message: 'Error al actualizar el perfil'
    };
  }
}