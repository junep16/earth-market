import React from "react";
import styled from "styled-components";  
import MenuHead from "Components/MenuHead/MenuHead";
import CartProductCard from "Components/CartProductCard/CartProductCard";
import CartTotalCard from "Components/CartTotalCard/CartTotalCard";

export default function CartContainer() {
  return (
    <div> 
        <CartContainerWrap>
          <Title>장바구니</Title>
          <form>
            <MenuHead></MenuHead>
            <CartProductCard></CartProductCard>
            <CartProductCard></CartProductCard> 
            <CartTotalCard></CartTotalCard>
            <SubmitButton type="button">주문하기</SubmitButton>
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
const SubmitButton = styled.button`
  background-color: #21BF48; 
  width: 220px; 
  height: 70px; 
  border-radius: 5px; 
  color: #FFF; 
  font-size: 20px; 
  font-weight: 700; 
  &:hover {
    opacity: 0.3; 
  }
`