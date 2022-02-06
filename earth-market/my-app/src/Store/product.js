import React, { createContext } from "react"; 

export const ProductContext = createContext(); 

export const ProductStore = (props) => {
  const products = {
    name : "book", 
    company: "제코베", 
    price: 13000
  }; 

  return (
    <ProductContext.Provider value={products}>{props.children}</ProductContext.Provider>
  )
}

export default ProductStore; 