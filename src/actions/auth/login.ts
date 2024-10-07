'use server';
 
import { signIn } from '@/auth.config';
import { sleep } from '@/utils';
// import { AuthError } from 'next-auth';
 
// ...
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await sleep(2);
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    // if (error instanceof AuthError) {
    //   switch (error.type) {
    //     case 'CredentialsSignin':
    //       return 'Invalid credentials.';
    //     default:
          return 'CredentialsSignIn.';
    //   }
    // }
    // throw error;
  }
}