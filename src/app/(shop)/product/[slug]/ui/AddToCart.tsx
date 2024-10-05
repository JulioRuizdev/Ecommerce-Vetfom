'use client';

import { QuantitySelector } from "@/components"
import { Product } from "@/interfaces"
import { useState } from "react";

interface Props{
    product: Product;
}


export const AddToCart=({product}: Props) => {

    const [quantity, setQuantity] = useState<number>(1)

    const addToCart = () =>{
        console.log(`Product: ${product.slug} Quantity: ${quantity}`);
    }

  return (
    <>
    {/* <Selector de cantida /> */}
        <QuantitySelector 
            quantity={quantity}
            onQuantityChanged={setQuantity}
        />

        <button 
            onClick={ addToCart} 
            className="btn-primary my-5">
                Agregar al carrito
        </button>
    </>
  )
}
