import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store";

function ReduxAddToCart({ product }) {
    const dispatch = useDispatch();

    function incProduct() {
        dispatch(addToCart(product));
    }

    function decProduct() {
        dispatch(removeFromCart(product));
    }

    const cart = useSelector(state => state.items || {}); // Ensure cart is always an object

    const quantity = useSelector(state => {
        const items = state.cart.items || {}; 
        return items[product.id]?.quantity || 0;
    });

    if (quantity === 0) {
        return (
            <div>
                <button onClick={incProduct}>Add to Cart</button>
            </div>
        );
    } else {
        return (
            <div>
                <button onClick={decProduct}>-</button>
                <span>{quantity}</span>
                <button onClick={incProduct}>+</button>
            </div>
        );
    }
}

export default ReduxAddToCart;
