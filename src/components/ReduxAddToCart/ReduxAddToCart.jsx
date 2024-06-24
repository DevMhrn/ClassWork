import Products from "../Product/Products";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
function ReduxAddToCart({product}) {
    let dispatch = useDispatch();
    function IncProduct(){
        dispatch({type: 'ADD_TO_CART', payload: product});
        


    }
    function DecProduct(){
        dispatch({type: 'REMOVE_FROM_CART', payload: product});

    }
    let cart = useSelector(state => state.items);
   
    let quantity = useSelector((state) => {
        return state.items[product.id]?.quantity || 0;
    })
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
export default ReduxAddToCart;