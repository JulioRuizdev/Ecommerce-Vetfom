import type { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface State {

    cart: CartProduct[];

    getTotalItems: () => number;
    getSummaryInformation: () => {
        subTotal: number;
        tax: number;
        total: number;
        itemsInCart: number;
    };


    addProductToCart: (product: CartProduct) => void;
    updateProductQuantity: (product: CartProduct, quantity: number) => void;
    removeProduct: (product: CartProduct) => void;

    clearCart: () => void;

}

// hay un bug utilizar npm install zustand@4.4.6

export const useCartStore = create<State>()(

    persist(
    // persist

        (set,get) =>({
            cart: [],

            getTotalItems: () => {
                const {cart} = get();
                return cart.reduce( (total, item)=>total + item.quantity,0);
            },

            getSummaryInformation: ()  =>{
                const {cart} = get();

                const subTotal = cart.reduce(
                    (subTotal, product ) => product.quantity * product.price + subTotal,
                    0);
                    const tax = parseFloat((subTotal * 0.18).toFixed(2)); // Impuestos al 18%
                    const total = parseFloat((subTotal + tax).toFixed(2)); // Total
                    const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0);
    
            
                    return{
                        subTotal: parseFloat(subTotal.toFixed(2))
                        , tax, total, itemsInCart
                    }
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
            },
            clearCart: () => {
                set({cart: []});
            },

        }),
        {
            name: 'shoping-cart',
        }


    )
) 