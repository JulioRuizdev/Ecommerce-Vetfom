import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  const getInitials = (name: string | null | undefined): string => {
    if (!name) return '??';
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Title title="Perfil" />
      
      {/* Card principal */}
      <div className="max-w-xl mx-auto mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header del perfil */}
        <div className="p-6 border-b flex flex-col items-center">
          {/* Avatar del usuario o iniciales */}
          <div className="relative mb-4">
            {session.user.image ? (
              <img 
                src={session.user.image} 
                alt="User Profile" 
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <IoPersonCircleOutline className="text-8xl text-gray-400" />
            )}
          </div>
          
          {/* Información básica */}
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{session.user.name}</h2>
          <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
            {session.user.role}
          </span>
        </div>
        
        {/* Contenido del perfil */}
        <div className="p-6 space-y-4 text-center">
          <div className="text-gray-600">
            <span className="font-semibold">Email: </span>{session.user.email}
          </div>
        </div>

        {/* Footer con acciones */}
        <div className="px-6 py-4 bg-gray-50 border-t">
          <div className="flex justify-center">
            <Link href="/profile/edit">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Modificar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
