import React from "react";
import styled from "styled-components";

export default function CartProductCard() {
  return(
    <div>
      <ProductDetail>
        <div>
          <label htmlFor="input-selectall"></label>
          <input type="radio" />
        </div>
        <ProductInfo>
          <ProductImageWrap>
            <img src="/image/product_soap.jpg" alt="제품이미지"></img>
          </ProductImageWrap>
          <ProductInfoText>
            <p>백엔드글로벌</p>
            <p>딥러닝 개발자 무릎 담요</p>
            <p>17,500원</p>
            <p>택배배송 /  무료배송</p>
          </ProductInfoText>
        </ProductInfo> 
        <ButtonWrap>
          <ButtonMinus type="button"></ButtonMinus>
          <Quantity>1</Quantity>
          <ButtonPlus type="button"></ButtonPlus>
        </ButtonWrap> 
        <PriceWrap>
          <p>17,500원</p>
          <button type="button">주문하기</button>
        </PriceWrap>
        <DeleteButton type="button"></DeleteButton>
      </ProductDetail>
    </div>
  )
}

const ProductDetail = styled.form`
  position: relative; 
  display: grid; 
  grid-template-columns: 0.5fr 4fr 2fr 2fr; 
  align-items: center; 
  justify-items: center; 
  border: 1px solid #C4C4C4;
  border-radius: 10px;  
  box-sizing: border-box; 
  padding: 0 20px; 
  margin: 10px 0; 
`

const ProductInfo = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  box-sizing: border-box; 
  padding: 20px 0 ;
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
margin-left: 20px;  
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
  p:nth-child(3) {
    font-size: 18px;  
    font-weight: 700; 
    line-height: 2; 
  } 
  p:last-child {
    line-height: 4; 
  }
`

// 버튼
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
  background: transparent url("/image/icon-minus-line.svg") no-repeat center / 20px;  
  &:hover {
    opacity: 0.3; 
  } 
`
const ButtonPlus = styled.button`
  width: 48px; 
  height: 48px;    
  background: transparent url("/image/icon-plus-line.svg") no-repeat center / 20px;  
  padding: 0; 
  &:hover {
    opacity: 0.3; 
  }
`
const Quantity = styled.span`
  width: 48px; 
  height: 48px; 
  border-left: 1px solid #C4C4C4; 
  border-right: 1px solid #C4C4C4; 
  text-align: center; 
  line-height: 2.8; 
`

// 가격 정보 및 주문 버튼
const PriceWrap = styled.div`
  p {
    font-size: 18px; 
    font-weight: 700; 
    color: #EB5757; 
    line-height: 3; 
  }
  button {
    width: 130px; 
    height: 40px; 
    background: #21BF48; 
    color: #FFF; 
    font-size: 16px;  
    border-radius: 5px; 
  }
  button:hover {
    opacity: 0.3; 
  }
`

const DeleteButton = styled.button`
  position: absolute; 
  width: 20px; 
  height: 20px;   
  background: transparent url("/image/icon-delete.svg") no-repeat center / 20px;   
  top: 20px; 
  right: 20px; 
  &:hover {
    opacity: 0.3; 
  }
`