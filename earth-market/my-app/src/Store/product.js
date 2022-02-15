import React, { createContext } from "react"; 
import axios from 'axios';  
import { API_ENDPOINT } from 'Constants/api';

const getProductData = () => {
  axios.get(API_ENDPOINT + '/products')
    .then((response) => {
      console.log(response.data.results) 
    }); 
}


export const ProductContext = createContext(); 

export const ProductStore = (props) => {
  const products = {
    name : "book", 
    company: "제코베", 
    price: 13000
  }; 

  return (
    <ProductContext.Provider value={products}>{props.children}</ProductContext.Provider>
  ); 
}

export default ProductStore; 