import React from "react";
import WindowSize  from "./WindowSize";
import ProductCard from "../ProductCard/ProductCard"; 
import { useState, useEffect } from "react"; 
import AddtoCart from "../AddtoCart/AddtoCart";

function Products({cart, increaseQuantity, decreaseQuantity}) {
  // const products = [
  //   {
  //     id: 1,
  //     title: "Apple iPhone 14",
  //     price: "Rs. 1,00,000"
  //     },
  //     {
  //     id: 2,
  //     title: "Apple iPhone 13",
  //     price: "Rs. 70,000"
  //     },
  //     {
  //     id: 3,
  //     title: "Google Pixel 7",
  //     price: "Rs. 50,000"
  //     },
  //     {
  //     id: 4,
  //     title: "Nokia 1100",
  //     price: "Rs. 2,000"
  //     },
  //     {
  //     id: 5,
  //     title: "Samsung Galaxy S10",
  //     price: "Rs. 1,00,000"
  //     },
  //     {
  //     id: 6,
  //     title: "Sony Xperia S10",
  //     price: "Rs. 1,00,000"
  //     }
  //     ];
    const [products, setProducts] = useState([
      

    ]);
    

   
      
    

    

    useEffect(()=>{
      fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").then(
        (response) => {
          return response.json();
        }
      ).then((res)=>{
        console.log(res);
        setProducts(res);
  
      })
      console.log("useEffect called");
    }, []);
    
    


  
  return (
    <div>
      <h2>Products </h2>
      {
        products.map(function(product){
          // return <ProductCard title={product.title} price={product.price} k = {product.id} />
          return <ProductCard title={product.title} price={product.price} k = {product.id} currency={product.currency}  
          product={product} cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}
          />
        })

      }

      <WindowSize />

    </div>
  );
}
export let a = 20;
export let b = 30;

export default Products;

