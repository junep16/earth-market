import React from "react";
import styled from "styled-components";
import ProductCard from "Components/ProductCard/ProductCard";

export default function ProductContainer() {
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