'use server'

import prisma from "@/lib/prisma";
import bcrypt from 'bcryptjs';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getUserData(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });
    return user;
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    throw new Error('Error al obtener datos del usuario');
  }
}

export async function updateUserData(email: string, data: {
    name: string;
    email: string;
    currentPassword?: string;
    newPassword?: string;
  }) {
    try {
      // Si se proporcionan contraseñas, verificar la contraseña actual
      if (data.currentPassword && data.newPassword) {
        const user = await prisma.user.findUnique({
          where: { email }
        });
  
        if (!user) throw new Error('Usuario no encontrado');
  
        // Verificar la contraseña actual
        const isValid = await bcrypt.compare(data.currentPassword, user.password);
        if (!isValid) {
          throw new Error('Contraseña actual incorrecta');
        }
  
        // Hashear la nueva contraseña
        const hashedPassword = await bcrypt.hash(data.newPassword, 10);
  
        // Actualizar con la nueva contraseña
        await prisma.user.update({
          where: { email },
          data: {
            name: data.name,
            email: data.email,
            password: hashedPassword,
          }
        });
      } else {
        // Si no hay contraseñas, solo actualizar nombre y email
        await prisma.user.update({
          where: { email },
          data: {
            name: data.name,
            email: data.email,
          }
        });
      }

      // Revalidar y redireccionar después de la actualización exitosa
      revalidatePath('/profile');
      redirect('/profile');
      
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      throw error;
    }
  }