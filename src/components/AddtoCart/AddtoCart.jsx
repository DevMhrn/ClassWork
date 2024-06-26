import Products from "../Product/Products";
import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import CartContext from "../../context/CartContext";
function AddtoCart({product}) {
    const {cart, increaseQuantity, decreaseQuantity} = useContext(CartContext); 
    
    

    
    function IncProduct(){
        increaseQuantity(product);
        


    }
    function DecProduct(){
        decreaseQuantity(product);

    }
    // console.log({cart})
    const quantity  = cart[product.id] ? cart[product.id].quantity : 0;
    if(quantity==0){
        return (
            <div >
                <button onClick={IncProduct}>AddtoCart</button>
            </div>
        )
    }
    else{
        return (
            <div>
                <button onClick={DecProduct}>-</button>
                <span>{quantity}</span>
                <button onClick={IncProduct}>+</button>
            </div>
        )
    }

   
}
export default AddtoCart;