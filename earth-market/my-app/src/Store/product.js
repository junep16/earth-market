import React, { createContext } from "react"; 
import axios from 'axios';  
import { API_ENDPOINT } from 'Constants/api';


export const ProductContext = createContext(); 
export const ProductStore = (props) => {


  axios.get(API_ENDPOINT + '/products')
    .then((response) => {
      const result = (response.data.results); 
      console.log(result); 
      for(let i=0; i > result.length; i++) {
        
      }
    }); 
    
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