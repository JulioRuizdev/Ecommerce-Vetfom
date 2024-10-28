"use client";

import { Title } from "@/components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createUpdateUserProfile } from '@/actions';
import { useForm } from "react-hook-form";
import { User, UserImage as UserWithImage } from "@/interfaces";
import { useSession } from "next-auth/react";
import { IoPersonCircleOutline } from "react-icons/io5";

interface Props {
    user: Partial<User> & { UserImage?: UserWithImage[]};
}

interface FormInputs {
  id?: string;
  name: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  image?: FileList | null;
}

export const UserForm = ({ user }: Props) => {
  const router = useRouter();
  const { data: session, update } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormInputs>({
    defaultValues: {
      ...user,
      image: undefined,
    }
  });

  const onSubmit = async (data: FormInputs) => {
    setIsSubmitting(true);
    const formData = new FormData();

    const {image, ...userToSave} = data;

    if(user.id){
        formData.append('id', user.id);
    }

    formData.append('name', userToSave.name);
    formData.append('email', userToSave.email);
    formData.append('currentPassword', userToSave.currentPassword);
    formData.append('newPassword', userToSave.newPassword);
    formData.append('confirmPassword', userToSave.confirmPassword);

    if (image && image.length > 0) {
      formData.append('image', image[0]);
    }

    try {
      const { ok, user: updatedUser, message } = await createUpdateUserProfile(formData);

      if (!ok) {
        setError('root', { type: 'manual', message });
        return;
      }

      if (updatedUser) {
        await update({
          ...session,
          user: {
            ...session?.user,
            name: updatedUser.name,
            email: updatedUser.email,
            image: updatedUser.image,
          }
        });

        // Redirigir al perfil del usuario actual
        router.push(`/profile/${updatedUser.id}`);
        router.refresh();
      }
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      setError('root', { type: 'manual', message: 'Error al actualizar el perfil' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return(
    <div className="container mx-auto px-4 py-8">
      <Title title="Perfil" />
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b flex flex-col items-center">
          <div className="relative mb-4">
          {/* Avatar */}
                <IoPersonCircleOutline className="text-8xl text-gray-400" />
          </div>
          <input
            {...register("name", { required: "El nombre es obligatorio" })}
            className="text-2xl font-bold text-gray-800 mb-1 text-center"
            placeholder="Nombre"
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
            {user.role}
          </span>
        </div>
        <div className="p-6 space-y-4">
          <div className="text-gray-600">
            <input
              {...register("email", { 
                required: "El email es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido"
                }
              })}
              className="w-full p-2 border rounded"
              placeholder="Email"
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="text-gray-600">
            <input
              {...register("currentPassword", { required: "La contraseña actual es obligatoria" })}
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Contraseña actual"
            />
            {errors.currentPassword && <span className="text-red-500">{errors.currentPassword.message}</span>}
          </div>
          <div className="text-gray-600">
            <input
              {...register("newPassword")}
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Nueva contraseña (opcional)"
            />
          </div>
          <div className="text-gray-600">
            <input
              {...register("confirmPassword")}
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Confirmar nueva contraseña"
            />
          </div>
          <div className="text-gray-600">
            <input
              {...register("image")}
              type="file"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t">
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Guardando...' : 'Guardar cambios'}
            </button>
          </div>
          {errors.root && <p className="text-red-500 text-center mt-2">{errors.root.message}</p>}
        </div>
      </form>
    </div>
  )
}
