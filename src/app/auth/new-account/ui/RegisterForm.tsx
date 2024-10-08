'use client';
import clsx from "clsx";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
    name: string;
    email: string;
    password: string;
}
  

export const RegisterForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async(data) => {
        const {name, email, password} = data
        console.log(name, email, password)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

        {
            // errors.name?.type === 'required' && (
            //     <div className="text-red-500">El nombre es obligatorio</div>
            // )
        }

    <label htmlFor="email">Nombre Completo </label>
      <input
        className={
            clsx(
                "px-5 py-2 border bg-gray-200 rounded mb-5",
                {
                    "border-red-500": !!errors.name
                }
            )
        }
        type="text" 
        {...register("name", {required: true})}
        autoFocus
        />        

      <label htmlFor="email">Correo Electronico </label>
      <input
        className={
            clsx(
                "px-5 py-2 border bg-gray-200 rounded mb-5",
                {
                    "border-red-500": !!errors.email
                }
            )
        }
        type="email" 
        {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
        />


      <label htmlFor="email">Contraseña</label>
      <input
        className={
            clsx(
                "px-5 py-2 border bg-gray-200 rounded mb-5",
                {
                    "border-red-500": !!errors.password
                }
            )
        }
        type="password" 
        {...register("password", {required: true, minLength: 6})}
        />

      <button
        
        className="btn-primary">
        Crear Cuenta
      </button>


      {/* divisor l ine */ }
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link
        href="/auth/login" 
        className="btn-secondary text-center">
        Ingresar
      </Link>

    </form>
  )
}
