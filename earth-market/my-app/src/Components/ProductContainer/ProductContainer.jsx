import React, { useContext } from "react";  
import styled from "styled-components";
import ProductCard from "Components/ProductCard/ProductCard";
import { ProductStore } from "../Store/product"; 


export default function ProductContainer() {
  const context = useContext(ProductStore); 
  console.log(context); 

  return (
    <div> 
      <Container>
        <ProductCard></ProductCard>  
        <ProductCard></ProductCard> 
        <ProductCard></ProductCard> 
        <ProductCard></ProductCard> 
        <ProductCard></ProductCard> 
      </Container>
    </div> 
    );
  }

const Container = styled.section`
    display:grid; 
    grid-template-columns: repeat(3, 1fr);
    gap: 30px 20px;
    width: 100vw; 
    box-sizing: border-box;
    padding: 3% 8%; 
` 