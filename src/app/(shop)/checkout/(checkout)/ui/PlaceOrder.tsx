'use client';
import { useAddressStore, useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import Link from "next/link"
import { useEffect, useState } from "react";


export const  PlaceOrder = () => {

    const [loaded, setLoaded] = useState(false);

    const address = useAddressStore( state => state.address);

    const {itemsInCart, subTotal, tax, total }= useCartStore( (state) =>
      state.getSummaryInformation()  
    );

    


    useEffect(() => {
        setLoaded(true);
      
    }, []);


    if( !loaded){
        return <p>Cargando...</p>
    }



  return (
        <div className="bg-white rounded-xl shadow-xl p-7">
                            
        <h2 className="text-2xl mb-2">Direccion de entrega</h2>
        <div className="mb-10">
            <p className="text-xl font-bold"> {address.firstName} {address.lastName}</p>
            <p>{address.address}</p>
            <p>{address.address2}</p>
            <p>{address.postalCode}</p>
            <p>{address.city}, {address.country}</p>
            <p>{address.phone}</p>
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
            <span className="text-right">{ itemsInCart === 1 ? '1 articulo' : `${ itemsInCart} articulos`}</span>

            <span>
                Subtotal
            </span>
            <span className="text-right">{currencyFormat(subTotal)}</span>

            <span>
                Impuestos (18%)
            </span>
            <span className="text-right">{ currencyFormat(tax) }</span>

            <span className="mt-5 text-2xl">
            Total: 
            </span>
            <span className="mt-5 text-2xl text-right">{ currencyFormat(total)}</span>

        </div>

        <div className="mt-5 mb-2 w-full">

            {/*Disclaimer antes del boton */}
            <p className="mb-5">
                <span className="text-xs"> 
                    Al hacer clic en "Colocar orden", aceptas nuestros <Link href="/terms" className="underline"> terminos y condiciones </Link>
                    y nuestra <Link href="/privacy" className="underline"> politica de privacidad </Link>
                </span>
            </p>

            <button 
            // href="/orders/123" 
            className="flex btn-primary justify-center">
                Colocar orden
            </button>
        </div>

    </div>
  )
}
