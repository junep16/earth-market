import React from "react";
import styled from "styled-components";  
import MenuHead from "Components/MenuHead/MenuHead";
import CartProductCard from "Components/CartProductCard/CartProductCard";

export default function CartContainer() {
  return (
    <div> 
        <CartContainerWrap>
          <Title>장바구니</Title>
          <form>
            <MenuHead></MenuHead>
            <CartProductCard></CartProductCard>
            <CartProductCard></CartProductCard>
            <CartProductCard></CartProductCard>
            <CartProductCard></CartProductCard>

          </form>
        </CartContainerWrap>
    </div>
  ); 
}

const CartContainerWrap = styled.section`
  text-align: center;  
  padding: 0 8%;
  margin-bottom: 50px; 
`
const Title = styled.p`
  font-size: 36px; 
  font-weight: 700;  
  line-height: 3;  
`