import React from "react";
import styled from "styled-components";  
import CheckoutMenuHead from "Components/CheckoutMenuHead/CheckoutMenuHead";
import CheckoutProductCard from "Components/CheckoutProductCard/CheckoutProductCard"; 

export default function CheckoutContainer() {
  return(
    <div>
      <CheckoutContainerWrap>
        <Title>주문/결제하기</Title>
        <form>
          <CheckoutMenuHead></CheckoutMenuHead>
          <CheckoutProductCard></CheckoutProductCard>
        </form>
      </CheckoutContainerWrap>
    </div>
  ) 
}

const CheckoutContainerWrap = styled.section`
  text-align: center;  
  padding: 0 8%;
  margin-bottom: 50px; 
`
const Title = styled.p`
  font-size: 36px; 
  font-weight: 700;  
  line-height: 3;  
`