import React from "react";
import styled from "styled-components";

export default function CheckoutProductCard() {
  return(
    <div>
      <SelectedProductWrap>
        <ProductInfo>
          <ProductImageWrap>
            <img src="/image/product_soap.jpg" alt="제품이미지"></img>
          </ProductImageWrap>
          <ProductInfoText>
            <p>백엔드글로벌</p>
            <p>딥러닝 개발자 무릎 담요</p>
            <p>수량 <span>1</span>개</p> 
          </ProductInfoText>
        </ProductInfo>
        <Discount>-</Discount>
        <Delivery>무료배송</Delivery>
        <Price><span>17,500</span>원</Price>
      </SelectedProductWrap>
    </div>
  )
}

const SelectedProductWrap = styled.div`
  display: grid; 
  grid-template-columns: 3fr 1fr 1fr 1fr; 
  align-items: center; 
  box-sizing: border-box; 
  padding: 0 20px; 

`
const ProductInfo = styled.div`
  display: flex; 
  justify-content: flex-start; 
  align-items: center; 
  box-sizing: border-box; 
  padding: 20px 0;
`
const ProductImageWrap = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 160px; 
  width: 160px; 
  border-radius: 10px; 
  overflow: hidden; 
  img{ 
    width: 100%; 
    height: 100%; 
  }
`
const ProductInfoText = styled.div`  
text-align: left;
margin-left: 50px;  
  p:first-child, 
  p:last-child {
    font-size: 14px; 
    color: #767676; 
    font-weight: 400; 
    line-height: 2; 
  }
  p:nth-child(2) {
    font-size: 18px;  
    font-weight: 400; 
    line-height: 2; 
  } 
`
const Discount = styled.p`
  font-size: 14px; 
  color: #767676; 
  font-weight: 400; 
  line-height: 2; 
`
const Delivery = styled.p`
  font-size: 14px; 
  color: #767676; 
  font-weight: 400; 
  line-height: 2; 

`
const Price = styled.p`
  font-size: 18px; 
  font-weight: 700; 
  line-height: 2; 
`