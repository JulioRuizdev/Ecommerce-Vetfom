'use server'

import { revalidatePath } from 'next/cache'

export async function updateUserProfile(formData: FormData) {
  try {
    // Extraer los datos del FormData
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const currentPassword = formData.get('currentPassword') as string
    const newPassword = formData.get('newPassword') as string
    const image = formData.get('image') as File | null

    // Aquí deberías incluir la lógica para actualizar el usuario en la base de datos
    // Por ejemplo, usando Prisma:
    // const updatedUser = await prisma.user.update({
    //   where: { id: userId },
    //   data: {
    //     name,
    //     email,
    //     // Manejar la actualización de la contraseña si es necesario
    //     // Manejar la actualización de la imagen si es necesario
    //   },
    // })

    // Simular una actualización exitosa
    const updatedUser = { name, email }

    revalidatePath('/profile')
    return { ok: true, user: updatedUser }
  } catch (error) {
    console.error('Error al actualizar el perfil:', error)
    return { ok: false, error: error instanceof Error ? error.message : 'Error desconocido' }
  }
}
