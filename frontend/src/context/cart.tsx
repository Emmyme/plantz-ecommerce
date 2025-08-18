'use client'

import { createContext, useContext, useState, ReactNode } from "react";

export interface Item {
  image: string;
  price: number;
  id: number;
  name: string;
}

interface CartContextType {
   cart: Item[];
   addToCart: (item : Item) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);


export function Context({ children }: {children : React.ReactNode}) {
    const [cart, setCart] = useState<Item[]>([]);

    function addToCart(item: Item) {
        setCart([...cart, item]);
    }

  
    return (
      <CartContext.Provider value={{ cart, addToCart }}>
        {children}
      </CartContext.Provider>
    );
  }


  export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart is not available')
    }
    return context;
  }