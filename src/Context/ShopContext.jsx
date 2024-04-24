import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_products";
export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    const array = [];
    let cart = {};
    for(let index = 0; index < array.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const[cartItems,setCartItems] = useState(getDefaultCart());
   
   
    const addtoCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmout = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            return totalAmount;
        }
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            totalItem+= cartItems[item];
        }
        return totalItem;
    }
    //console.log(cartItems);
    const contextValue = {getTotalCartItems,getTotalCartAmout,all_product,cartItems,addtoCart,removeCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;