import type { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface State {

    cart: CartProduct[];

    getTotalItems: () => number;


    addProductToCart: (product: CartProduct) => void;
    updateProductQuantity: (product: CartProduct, quantity: number) => void;
    removeProduct: (product: CartProduct) => void;

}


export const useCartStore = create<State>()(

    persist(
    // persist

        (set,get) =>({
            cart: [],

            getTotalItems: () => {
                const {cart} = get();
                return cart.reduce( (total, item)=>total + item.quantity,0);
            },


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

            },
            updateProductQuantity: (product: CartProduct, quantity: number) =>{
                const {cart} = get();

                const updateCartProducts = cart.map((item)=>{
                    if (item.id === product.id){
                        return {...item, quantity: quantity}
                    }

                    return item;
                });

                set({cart: updateCartProducts});
            },

            removeProduct: (product: CartProduct) => {
                const {cart} = get();
                const updateCartProducts = cart.filter(
                    (item) => item.id !== product.id
                )

                set ({cart: updateCartProducts});
            }

        }),
        {
            name: 'shoping-cart',
        }


    )
) 