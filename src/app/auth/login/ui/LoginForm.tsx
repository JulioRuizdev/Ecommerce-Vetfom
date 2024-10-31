'use client';
import { authenticate } from "@/actions";
import clsx from "clsx";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { IoInformationOutline } from "react-icons/io5";


export const LoginForm =() =>{


  const router = useRouter();
  const [state, dispatch]= useFormState(authenticate,undefined);

  useEffect(() => {if( state === 'Success'){
    router.replace('/');
  }},[]);

  return (
    <form action={dispatch} className="flex flex-col">



      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email" 
        name="email"
        />


      <label htmlFor="password">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password" 
        name="password"
        />

      <div
      className="flex h-8 items-end space-x-1"
      aria-live="polite"
      aria-atomic="true">
        {state === "CredentialsSignin" && (
          <div className="flex flex-row mb-2">
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">Credenciales invalidas</p>
          </div>

        )}

      </div>

      <LoginButton />


      {/* divisor l ine */ }
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link
        href="/auth/new-account" 
        className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>

    </form>
    );
  };


  function LoginButton(){
    const {pending} = useFormStatus();

    const handleClick = () => {
      if (!pending) {
        window.location.replace('/');
      }
    };

    return (
      <div className="flex flex-row items-center gap-4">
 
        <button
          type="submit"
          className={clsx(
            "w-full",
            {
              "btn-primary": !pending,
              "btn-disabled": pending
            }
          )}
          disabled={pending}
          onClick={handleClick}
        >
          Ingresar
        </button>
      </div>
    )
  }