'use server';

import { signOut } from "@/auth.config";

// Action de logout para manejar desde el servidor
export const logout = async () => {
    await signOut();
    // return { redirectUrl: '/' }; // Retorna la URL para redireccionar desde el cliente
};
