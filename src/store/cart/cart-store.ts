import type { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface State {

    cart: CartProduct[];


    addProductToCart: (product: CartProduct) => void;
    /// updateProductQuantity
    /// removeProduct

}


export const useCartStore = create<State>()(

    // persist

    (set,get) =>({
        cart: [],


        // Metodos
        addProductToCart: (product: CartProduct) =>{
            const { cart }= get();

           // verificar si ya existe el producto
            const productInCart= cart.some( 
                (item) => item.id === product.id
            );

            if( !productInCart){
                set({
                    cart: [...cart, product]
                });
                return;
            }

            // ya sabemo si el producto existe tengo q incrementar  o acutailziar
            const updateCartProducts = cart.map((item)=>{
                if (item.id === product.id){
                    return {...item, quantity: item.quantity + product.quantity}
                }

                return item;
            });

            set({ cart: updateCartProducts })

        }
    })
) 