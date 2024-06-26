import React from "react";
import { useSelector } from "react-redux";

function Cart() {
    const cartElements = useSelector(state => state.items) || {}; // Ensure cartElements is always an object

    return (
        <div>
            {Object.keys(cartElements).length === 0 ? (
                <div>No items in the cart</div>
            ) : (
                Object.keys(cartElements).map((key) => (
                    <div className="currentCart" key={key}>
                        <div>{cartElements[key].title}</div>
                        <div>{cartElements[key].quantity}</div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;
