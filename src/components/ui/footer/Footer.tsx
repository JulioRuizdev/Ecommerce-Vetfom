import { titleFont } from "@/app/config/fonts"
import Link from "next/link"


export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
        <Link href='/'>
        <span className={`${titleFont.className} antialiased font-bold`}>Vetfom</span>
        <span>| Tienda</span>
        <span>© { new Date().getFullYear() }</span>
        </Link>

        <Link href='/'
        className="mx-3">
            Politicas y Privacidad
        </Link>
        <Link href='/'
        className="mx-3">
            Ubicaciones
        </Link>
    </div>
  )
}
