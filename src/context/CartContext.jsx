import React, { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (productToAdd, quantity) => {
        const newProduct = {
          ...productToAdd,
          quantity,
        };
        if (isInCart(newProduct.id)) {
          const updatedCart = cart.map((product) => {
            if (product.id === newProduct.id) {
              return { ...product, quantity: product.quantity + newProduct.quantity };
            }
            return product;
          });
          setCart(updatedCart);
        } else {
          setCart([...cart, newProduct]);
        }
      };

      const isInCart = (id) => {
        return cart.some((el) => el.id === id);
      };
      const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
      };
    
      const getQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
      };
    
      const removeItem = (id) => {
        const updatedCart = cart.filter((el) => el.id !== id);
        setCart([...updatedCart]);
      };
    
      const clearCart = () => {
        setCart([]);
      };
      return (
        <Context.Provider
          value={{
            cart,
            setCart,
            addItem,
            removeItem,
            clearCart,
            getQuantity,
            getTotal,
          }}
        >
          {children}
        </Context.Provider>
      );
    };
    
    export default Context;
    