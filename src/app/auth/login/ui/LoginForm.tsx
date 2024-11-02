'use client';

import { authenticate } from "@/actions";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { IoInformationOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';

export const LoginForm = () => {
  const router = useRouter();
  const [state, dispatch] = useFormState(authenticate, undefined);
  const [error, setError] = useState<string | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (state === 'Success' && !isRedirecting) {
      setIsRedirecting(true);
      // Primero limpiamos cualquier error previo
      setError(null);
      
      // Pequeño delay antes de la redirección
      setTimeout(() => {
        window.location.replace('/');
      }, 100);
    } else if (state === 'CredentialsSignin') {
      setError("Credenciales inválidas, verifica tu correo y contraseña");
      setIsRedirecting(false);
    }
  }, [state, router, isRedirecting]);

  return (
    <form action={async (formData: FormData) => {
      setError(null); // Limpiar error al intentar nuevo submit
      await dispatch(formData);
    }} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
        required
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        name="password"
        required
      />

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {error && (
          <div className="flex flex-row mb-2">
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{error}</p>
          </div>
        )}
      </div>

      <LoginButton isRedirecting={isRedirecting} />

      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};

function LoginButton({ isRedirecting }: { isRedirecting: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={clsx({
        "btn-primary": !pending && !isRedirecting,
        "btn-disabled": pending || isRedirecting
      })}
      disabled={pending || isRedirecting}
    >
      {isRedirecting ? 'Ingresando...' : 'Ingresar'}
    </button>
  );
}