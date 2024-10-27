import { getUserById } from "@/actions";
import { Title } from "@/components";
import { redirect } from "next/navigation";
import { UserForm } from "../[id]/ui/UserForm";


interface Props{
    params:{
        id: string;
    }
}


export default async function UserPage({params}: Props) {
    const {id} = params;
  
    const [user] = await Promise.all([
      getUserById(id), // Assuming this function fetches user data by id
    ]);
  
    if(!user && id !== 'new'){
      redirect('/profile');
    }
  
    const title = (id === 'new') ? 'Nuevo Usuario' : 'Editar Usuario';
  
    return (
      <>
        <Title title={title} />
        <UserForm user={user ?? {}} />
      </>
    )
}
