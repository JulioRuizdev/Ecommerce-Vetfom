import type { NextAuthConfig } from 'next-auth';
 
export const authConfig: NextAuthConfig  = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/new-account',
  },
  providers: [
    
  ]
};