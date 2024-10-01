import { titleFont } from "@/app/config/fonts"
import Image from "next/image"
import Link from "next/link"

export const PageNotFound = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row h-[600px] w-full justify-center items-center align-middle">

        <div className="text-center px-5 mx-5">
            <h2 className={` ${ titleFont.className } antialiased text-9xl`}>404</h2>
            <p className=" font-semibold text-xl ">Oops, parece que te perdiste. No encontramos lo que buscas, puedes ser tan amable de salirte de mi pantano</p>
            <p className="font-light mt-2">
                <span>Puedes Regrasar al </span>
                <Link href='/' 
                className="font-normal hover:underline transition-all">
                    Inicio
                </Link>
            </p>
        </div>

        <div className="px-5 mx-5">
            <Image src="/error/error404.webp" alt="404" 
                className="p-5 sm:p-0 rounded-full"
                width={500}
                height={500}

            />
        </div>
            
        </div>
    )
}