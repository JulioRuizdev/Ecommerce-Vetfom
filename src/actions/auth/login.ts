'use server';

import { signIn } from '@/auth.config';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const result = await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false, // Importante: previene la redirección automática
    });

    if (!result) {
      return 'CredentialsSignin';
    }

    if (result.error) {
      return 'CredentialsSignin';
    }

    return 'Success';
  } catch (error) {
    console.error("Error en authenticate:", error);
    return 'CredentialsSignin';
  }
};