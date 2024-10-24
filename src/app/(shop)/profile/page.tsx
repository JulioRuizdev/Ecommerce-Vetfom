import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";


export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  // Función para obtener las iniciales del nombre
  const getInitials = (name: string | null | undefined): string => {
    if (!name) return '??';
    
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Title title="Perfil" />
      
      {/* Card principal */}
      <div className="max-w-2xl mx-auto mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header del perfil */}
        <div className="p-6 border-b">
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <div className="relative">
              {session.user.image ? (
                <img 
                  src={session.user.image} 
                  alt={session.user.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600">
                  {getInitials(session.user.name)}
                </div>
              )}
            </div>
            
            {/* Información básica */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{session.user.name}</h2>
              <span className="inline-block px-3 py-1 mt-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
                {session.user.role}
              </span>
            </div>
          </div>
        </div>
        
        {/* Contenido del perfil */}
        <div className="p-6 space-y-4">
          {/* Email */}
          <div className="flex items-center space-x-3 text-gray-600">
            <span>Email: {session.user.email}</span>
          </div>


          {/* Información detallada
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Información detallada</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <pre className="whitespace-pre-wrap text-sm text-gray-600 overflow-auto">
                {JSON.stringify(session.user, null, 2)}
              </pre>
            </div>
          </div> */}
        </div>

        {/* Footer con acciones (opcional) */}
        <div className="px-6 py-4 bg-gray-50 border-t">
          <div className="flex justify-end space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Editar Perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
