'use server';

import { signIn } from '@/auth.config';
import { sleep } from '@/utils';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const result = await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false, 
    });
    await sleep(0.5);

    // Si la autenticación es exitosa
    if (result?.ok) {
      return 'Success';
    } else {
      // En caso de error de credenciales
      return 'CredentialsSignin';
    }
  } catch (error) {
    console.error("Error en authenticate:", error);
    return 'CredentialsSignin';
  }
}

export const login = async (email: string, password: string) => {
  try {
    const result = await signIn('credentials', { email, password, redirect: false });
    if (result?.ok) {
      return { ok: true };
    } else {
      return { ok: false, message: 'Credenciales incorrectas' };
    }
  } catch (error) {
    console.error("Error en login:", error);
    return {
      ok: false,
      message: `No se pudo iniciar sesión: ${error}`
    };
  }
};
