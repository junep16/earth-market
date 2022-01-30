import React from "react";
import styled from "styled-components";

export default function CartTotalCard() {
  return (
    <div>
      <TotalInfo>
        <TotalPrice>
          <p>총 상품금액</p>
          <p><span>46,500</span>원</p>
        </TotalPrice>
        <IconMinus>
          <img src="image/icon-minus-line.png" alt="추가"></img>
        </IconMinus>
        <Discount>
          <p>상품할인</p>
          <p><span>0</span>원</p>
        </Discount>
        <IconPlus>
          <img src="image/icon-plus-line.png" alt="추가"></img>
        </IconPlus>
        <DeliveryFee>
          <p>배송비</p>
          <p><span>0</span>원</p>
        </DeliveryFee>
        <FinalPrice>
          <p>결제 예정 금액</p>
          <p><span>46,500</span>원</p>
        </FinalPrice>
      </TotalInfo>
    </div>
  ) 
}

const TotalInfo = styled.div`
  display: grid; 
  grid-template-columns: repeat(6, 1fr ); 
  background: #F2F2F2; 
  justify-items: center; 
  align-items: center; 
  height: 120px; 
  border-radius: 10px; 
  padding: 0 5%; 
  margin: 50px 0; 
`
const TotalPrice = styled.div`
  p:first-child {
    font-size: 16px; 
    line-height: 2; 
  }
  p:nth-child(2) {
    span {
      font-size: 24px; 
      font-weight: 700; 
    }
  }
`
const Discount = styled.div`
  p:first-child {
    font-size: 16px; 
    line-height: 2; 
  }
  p:nth-child(2) {
    span {
      font-size: 24px; 
      font-weight: 700; 
    }
  }
`
const DeliveryFee = styled.div`
  p:first-child {
    font-size: 16px; 
    line-height: 2; 
  }
  p:nth-child(2) {
    span {
      font-size: 24px; 
      font-weight: 700; 
    }
  }
`
const FinalPrice  = styled.div`
  p:first-child {
    font-size: 16px; 
    line-height: 2; 
  }
  p:nth-child(2) {
    color: #EB5757; 
    span {
      font-size: 36px; 
      font-weight: 700; 
      color: #EB5757; 
    }
  }
`

const IconMinus = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 30px; 
  width: 30px; 
  background-color: #FFF; 
  border-radius: 30px; 
`
const IconPlus = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 30px; 
  width: 30px; 
  background-color: #FFF; 
  border-radius: 30px; 

`
