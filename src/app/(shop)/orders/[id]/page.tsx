import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCarOutline } from "react-icons/io5";



const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],

]

interface Props {
    params:{
        id: string;
    }
}

export default function ({params}: Props){

    const {id} = params;

    return (
        <div className=" flex justify-center items-center mb-72 px-10 sm:px-0">

            <div className="flex flex-col w-[1000px]">

                <Title title={`Orden #${ id }`} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                    <div className="flex flex-col mt-5 ">
                        
                        <div className={
                            clsx(
                                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                {
                                    'bg-red-500': true,
                                    'bg-green-700': false,
                                }
                            )
                        }>
                        
                            <IoCarOutline size={30}/>
                            <span className="mx-2">Pendiente de Pago</span>

                        </div>

                    {/* Productos en el carrito */}
                    {
                        productsInCart.map( product => (
                            <div key={product.slug} className="flex mb-5">
                                <Image 
                                    src={`/products/${product.images[0]}`}
                                    width={100}
                                    height={100}
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                    }}
                                    alt={product.title}
                                    className="mr-5 rounded"
                                />

                                <div>
                                    <p>{product.title}</p>
                                    <p>S/ {product.price} x3</p>
                                    <p>Subtotal: S/{product.price * 3}</p>
                                </div>

                            </div>
                        ))
                    }
                    </div>

                    {/* Resumen de la compra */}
                    <div className="bg-white rounded-xl shadow-xl p-7">
                        
                        <h2 className="text-2xl mb-2">Direccion de entrega</h2>
                        <div className="mb-10">
                            <p className="text-xl font-bold">Julio Krack</p>
                            <p>Av. Brasil</p>
                            <p>Villa el salvador</p>
                            <p>Cod Postal: 3213123</p>
                        </div>
                        
                        {/* division*/}
                        <div className="w-full h-0.5 rounded bg-gray-200 mb-10"/>
                        
                        <h2 className="text-2xl mb-2">
                            Resumen de la compra
                        </h2>
                        <div className="grid grid-cols-2">
                            <span>
                                No. Productos
                            </span>
                            <span className="text-right">3 Articulos</span>
                        
                            <span>
                                Subtotal
                            </span>
                            <span className="text-right">S/. 100</span>

                            <span>
                                Impuestos (18%)
                            </span>
                            <span className="text-right">S/. 100</span>
                        
                            <span className="mt-5 text-2xl">
                               Total: 
                            </span>
                            <span className="mt-5 text-2xl text-right">S/. 100</span>
                        </div>

                        <div className="mt-5 mb-2 w-full">
                            <div className={
                                clsx(
                                    "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                    {
                                        'bg-red-500': true,
                                        'bg-green-700': false,
                                    }
                                )
                            }>
                            
                                <IoCarOutline size={30}/>
                                <span className="mx-2">Pendiente de Pago</span>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}