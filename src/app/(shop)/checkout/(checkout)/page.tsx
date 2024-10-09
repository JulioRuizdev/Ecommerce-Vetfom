import { Title } from "@/components";
import Link from "next/link";
import { ProductsInCart } from "./ui/ProductsInCart";



export default function (){
    return (
        <div className=" flex justify-center items-center mb-72 px-10 sm:px-0">

            <div className="flex flex-col w-[1000px]">

                <Title title="Verificar Orden" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                    <div className="flex flex-col mt-5 ">
                        <span className="text-xl">
                            Ajustar elementos
                        </span>
                        <Link href="/cart" className="underline mb-5"> Editar carrito</Link>
                    

                    {/* Productos en el carrito */}
                    
                    <ProductsInCart />

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

                            {/*Disclaimer antes del boton */}
                            <p className="mb-5">
                                <span className="text-xs"> 
                                    Al hacer clic en "Colocar orden", aceptas nuestros <Link href="/terms" className="underline"> terminos y condiciones </Link>
                                    y nuestra <Link href="/privacy" className="underline"> politica de privacidad </Link>
                                </span>
                            </p>

                            <Link href="/orders/123" className="flex btn-primary justify-center">
                                Colocar orden
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}