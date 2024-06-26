
import React from "react";
import {useSelector} from "react-redux";

function Cart() {
    const cartElements = useSelector(state => state.items); 
    return (
        <div>
            {
                Object.keys(cartElements).map((key) => {
                    return (
                        <div className="currentCart">
                            <div>{cartElements[key].title}</div>
                            <div> {cartElements[key].quantity}</div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Cart;