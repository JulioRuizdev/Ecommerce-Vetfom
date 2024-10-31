// src/app/(shop)/profile/edit/page.tsx
import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";
import { ProfileForm } from "../[id]/ui/UserForm";


export default async function EditProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Title title="Editar Perfil" />
      
      <div className="max-w-xl mx-auto mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <ProfileForm user={session.user} />
        </div>
      </div>
    </div>
  );
}