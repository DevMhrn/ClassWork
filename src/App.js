import logo from './logo.svg';
import './App.css';
import Products from './components/Product/Products';
import {a, b} from './components/Product/Products';
import {useState} from 'react';
import CartContext from './context/CartContext';



function App() {
  let [cart, setCart] = useState({});
  function increaseQuantity(product){
    const newCart = {...cart};
    if(!newCart[product.id]){

      newCart[product.id] = {
        ...product,
        quantity: 0
      };
    }
    newCart[product.id].quantity++;
    console.log(newCart); 
    setCart(newCart);
    
    console.log("Increase Quantity");
  }
  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }
  console.log(a, b);
  return (
    <div className="App">

      
      
        

      
      <Products cart= {cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
      
    </div>
  );
}


export default App;
