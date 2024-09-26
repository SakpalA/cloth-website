import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

// Create context named 'ShopContext' using createContext function.
// Initially the context's value is set to 'null'.
export const ShopContext = createContext(null);

// add to cart
const getDefaultCart = (all_product) => {
    let cart = {};
    for (let i = 0 ; i < all_product.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

// Define a functional component named 'ShopContextProvider' which acts as the provider for the 'ShopContext'.
const ShopContextProvider = ({ children }) => {
    // Create a variable 'contextValue' which contains the 'all_product' data.
    
    const [cartItems, setCartItems] = useState(getDefaultCart(all_product));
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1 }))
        // console.log(cartItems);
    }
    console.log(cartItems);

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;