'use client';

import { placeOrder } from "@/actions";
import { useAddressStore, useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import clsx from "clsx";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export const  PlaceOrder = () => {

    const router = useRouter();
    const [loaded, setLoaded] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);

    const address = useAddressStore( state => state.address);

    const {itemsInCart, subTotal, tax, total }= useCartStore( (state) =>
      state.getSummaryInformation()  
    );

    const cart = useCartStore( state => state.cart);
    const clearCart = useCartStore( state => state.clearCart);

    


    useEffect(() => {
        setLoaded(true);
      
    }, []);

    const onPlaceOrder = async() => {
        setIsPlacingOrder(true);

        const productsToOrder = cart.map( product => ({
            productId: product.id,
            quantity: product.quantity
        }))


        //! server action
        const resp = await placeOrder(productsToOrder, address);

        if( !resp.ok){
            setIsPlacingOrder(false);
            setErrorMessage(resp.message);
            return;
        }

        clearCart();
        // router.replace('/orders/' + resp.prismaTx?.order?.id);
        window.location.replace('/orders/' + resp.prismaTx?.order?.id);

        

    }



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

            <p className="text-red-500">{ errorMessage}</p>

            <button
            onClick={onPlaceOrder} 
            // href="/orders/123" 
            className={clsx({
                'btn-primary': !isPlacingOrder,
                'btn-disabled': isPlacingOrder
            })}>
                Colocar orden
            </button>
        </div>

    </div>
  )
}
