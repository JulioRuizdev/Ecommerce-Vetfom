import { titleFont } from '@/app/config/fonts'
import Link from 'next/link'
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';

export const TopMenu = () => {
    return (
        <nav className="flex px-5 justify-between items-center w-full">

            <div>
                <Link
                href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}> Vetfom </span>
                    <span > | Tienda </span>
                </Link>
            </div>

            <div className='hidden sm:block'>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href="/category/food">Comidas</Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href="/category/toys">Juguetes</Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href="/category/article">Articulos</Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href="/category/medecine">Medicamentos</Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-green-200' href="/about/">Sobre Nosotros</Link>

            </div>

            <div className='flex items-center'>

                <Link href='/search' className='mx-2'>
                    <IoSearchOutline className='w-5 h-5'></IoSearchOutline>
                </Link>

                <Link href='/cart' className='mx-2'>
                    <div className='relative'>
                        <span className='absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white'>
                            3
                        </span>
                        <IoCartOutline></IoCartOutline>
                    </div>
                </Link>

                <button
                className='m-2 p-2 rounder-md transition-all hover:bg-gray-100'
                >
                    Menu
                </button>

            </div>

        </nav>
    )
}