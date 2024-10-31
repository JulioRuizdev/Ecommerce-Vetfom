'use client'

import { getUserData, updateUserData } from '@/actions';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface UserFormData {
  name: string;
  email: string;
  currentPassword?: string;
  newPassword?: string;
}

export const ProfileForm = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<UserFormData>({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      if (session?.user?.email) {
        try {
          const data = await getUserData(session.user.email);
          if (data) {
            setUserData({
              name: data.name,
              email: data.email,
              currentPassword: '',
              newPassword: '',
            });
          }
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadUserData();
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session?.user?.email) return;

    try {
      // Solo incluimos las contraseñas si ambos campos están llenos
      const dataToUpdate = {
        name: userData.name,
        email: userData.email,
        ...(userData.currentPassword && userData.newPassword ? {
          currentPassword: userData.currentPassword,
          newPassword: userData.newPassword,
        } : {})
      };

      await updateUserData(session.user.email, dataToUpdate);
      alert('Perfil actualizado exitosamente');
      
      // Limpiar campos de contraseña después de actualizar
      setUserData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
      }));
    } catch (error) {
      console.error('Error al actualizar:', error);
      alert('Error al actualizar el perfil');
    }
  };

  if (isLoading) return <div>Cargando...</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          className="border p-2 rounded w-full"
        />
      </div>
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label htmlFor="currentPassword">Contraseña Actual:</label>
        <input
          type="password"
          id="currentPassword"
          value={userData.currentPassword}
          onChange={(e) => setUserData({ ...userData, currentPassword: e.target.value })}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label htmlFor="newPassword">Nueva Contraseña:</label>
        <input
          type="password"
          id="newPassword"
          value={userData.newPassword}
          onChange={(e) => setUserData({ ...userData, newPassword: e.target.value })}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="flex justify-between gap-4 mt-6">
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex-1"
        >
          Actualizar Perfil
        </button>

        <Link 
          href="/profile"
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-center flex-1"
        >
          Retroceder
        </Link>
      </div>
    </form>
  );
};