import React from "react";
import styled from "styled-components";  

export default function ProductDetail() {
  return(
    <div>
      <ProductDetailContainer> 
        <img src="/image/product_soap.jpg" alt="제품 이미지"></img>
        <div>
          <ProductInfo>
            <TextSeller>우당탕탕 라이캣의 실험실</TextSeller>
            <TextProduct>Hack Your Life 개발자 노트북 파우치</TextProduct>
            <TextPrice>29,000 <span>원</span></TextPrice>
            <DeliveryInfo>택배배송 / 무료배송</DeliveryInfo>
            <ButtonWrap>
              <ButtonMinus type="button"></ButtonMinus>
              <Quantity>1</Quantity>
              <ButtonPlus type="button"></ButtonPlus>
            </ButtonWrap>
          <div>
            <p>총 상품 금액</p>
            <p>총 수량 <span>1</span>개</p>
            <p><span>17,500</span>원</p>
          </div>
          </ProductInfo> 
        </div>
      </ProductDetailContainer>
    </div>
  )
}

const ProductDetailContainer = styled.section`
display: flex;  
justify-content: flex-start; 
align-items: center;
padding: 0 8%;  
  img {
    width: 600px; 
    height: 600px; 
  }
`
const TextSeller = styled.p`
  font-size: 16px; 
  color: #767676; 
  line-height: 1.5; 
  margin-top: 10px;
`
const TextProduct = styled.p`
  font-size: 18px; 
  color: #000; 
  line-height: 1.5; 
`
const TextPrice = styled.p`
  font-size: 24px; 
  color: #000; 
  font-weight: 700; 
  line-height: 1.5; 
  span {
    font-size: 16px; 
    font-weight: 500; 
  }
`

const ProductInfo = styled.div`
box-sizing: border-box; 
padding-left: 50px; 
`
const DeliveryInfo = styled.p`
  font-size: 16px; 
  color: #767676; 
`

const ButtonWrap = styled.div`
  display: flex; 
  width: 144px; 
  border: 1px solid #C4C4C4; 
  border-radius: 5px;
  overflow: hidden;
`
const ButtonMinus = styled.button`
  width: 48px; 
  height: 48px;   
  background: transparent url("../../icon/icon-minus-line.svg") no-repeat 0 0 / contain; 
  padding: 0; 
`
const ButtonPlus = styled.button`
  width: 48px; 
  height: 48px;    
  background: transparent url("../../icon/icon-plus-line.svg") no-repeat 0 0 / contain;  
  padding: 0; 
`
const Quantity = styled.span`
  width: 48px; 
  height: 48px; 
  border-left: 1px solid #C4C4C4; 
  border-right: 1px solid #C4C4C4; 
  text-align: center; 
  line-height: 2.8; 
`