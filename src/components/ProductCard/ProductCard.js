 import {useRef, useState } from 'react';
// import AddtoCart from '../AddtoCart/AddtoCart';
import ReduxAddToCart from '../ReduxAddToCart/ReduxAddToCart';



function ProductCard({title, price, k,product, cart, increaseQuantity, decreaseQuantity}) {
    let spanRef = useRef(null); // Initialize ref for span
    let pRef = useRef(null); // Initialize ref for p
    let iRef = useRef(0); // Initialize ref for input
    const [inputValue, setInputValue] = useState(''); // State to hold input value
    const [displayText, setDisplayText] = useState(''); // State to hold the text to be displayed



    function printTitle() {
        console.log(title);
        if (spanRef.current) {
            spanRef.current.style.color = "red";
            if (spanRef.current.style.display === 'none') {
                spanRef.current.style.display = 'block';
            } else {
                spanRef.current.style.display = 'none';
            }
        }
        if (pRef.current) {
            if (pRef.current.style.display === 'none') {
                pRef.current.style.display = 'block';
            } else {
                pRef.current.style.display = 'none';
            }
        }
    }

    function showInput(e) {
        setInputValue(e.target.value);
    }
    function appendInput(e) {
        if (e.key === 'Enter') {
            setDisplayText(inputValue);
            setInputValue('');
        }
        
    }
    
    return (
        <div>
            <h3>{k} . <span onClick={printTitle}>{title}</span> = <span ref={spanRef} style={{ display: 'none' }}>{price.value}</span></h3>
            <input 
                type="text" 
                placeholder="Enter Text" 
                value={inputValue}
                onChange={showInput}
                onKeyPress={appendInput} 
            />
            {/* <AddtoCart product={product}  /> */}
            <ReduxAddToCart product={product}/>
         
            

            
            <div ref={iRef}  className='append'> {inputValue}</div>
            <p ref={pRef} style={{ display: 'none' }}>This is a product card</p> 
            
        </div>
    );


}

export default ProductCard;
