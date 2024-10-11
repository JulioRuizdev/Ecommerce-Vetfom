import Link from "next/link"
import { IoCarOutline } from "react-icons/io5"

export default function EmptyPage(){
    return (
        <div className="flex justify-center items-center h-[800px]">
            
            <IoCarOutline size={80} className="mx-5"/>
            
            <div className="flex flex-col items-center">
                <h1 className="text-xl font-semibold">
                    El carrito esta vacio
                </h1>

                <Link href="/" className="text-blue-500 mt-2 text-4xl">
                    Regresar
                </Link>

            </div>
            
        </div>
    )
}