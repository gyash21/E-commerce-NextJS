import { create } from "zustand";
import {persist} from "zustand/middleware"

type CartItem = {

    name: string,
    id: string,
    images?: string[],
    description?: string,
    unit_amount: number,
    quantity: number
}


type CartState = {
    isOpen: boolean,
    cart: CartItem[]
    toggleCart: () => void
    addProduct: (item: CartItem) => void

}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart:[],
            isOpen: false,
            toggleCart: () => set((state) => ({isOpen: !state.isOpen})),
            addProduct: (item) => set((state) => {
                const existingItem = state.cart.find (cartItem => cartItem === item.id)
                if(existingItem){
                    const updatedCart = state.cart.map((cartItem) => {
                        if(cartItem === item.id){
                            return {...cartItem, quantity: cartItem.quantity + 1}
                        }
                        return cartItem
                    })
                }
            }),
        }),

        { name: 'cart-store'}

    )
)