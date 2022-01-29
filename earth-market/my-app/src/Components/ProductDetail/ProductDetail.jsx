import React from "react";
import styled from "styled-components";  

export default function ProductDetail() {
  return(
    <div>
      <ProductDetailContainer> 
        <img src="/image/product_soap.jpg" alt="제품 이미지"></img> 
        <div>
          <ProductInfo>
            <div>
              <TextSeller>우당탕탕 라이캣의 실험실</TextSeller>
              <TextProduct>Hack Your Life 개발자 노트북 파우치</TextProduct>
              <TextPrice>29,000 <span>원</span></TextPrice>
            </div>
            <div>
              <DeliveryInfo>택배배송 / 무료배송</DeliveryInfo>
              <ButtonContainer>
                <ButtonWrap>
                  <ButtonMinus type="button"></ButtonMinus>
                  <Quantity>1</Quantity>
                  <ButtonPlus type="button"></ButtonPlus>
                </ButtonWrap>
              </ButtonContainer>
            </div>
          <ProductPrice>
            <p>총 상품 금액</p>
            <PriceDetail>
              <p>총 수량 <span>1</span>개</p>
              <p><strong>17,500</strong>원</p>
            </PriceDetail>
          </ProductPrice>
          <ShopButtonContainer>
            <button type="button" class="button-shop">바로 구매</button>
            <button type="button" class="button-basket">장바구니</button>
          </ShopButtonContainer>
          </ProductInfo> 
        </div>
      </ProductDetailContainer>
      <BottomNavWrap>
        <BottomNavButtonContainer>
          <button type="button">상세</button>
          <button type="button">리뷰</button>
          <button type="button">Q&A</button>
          <button type="button">반품/교환정보</button>
        </BottomNavButtonContainer>
      </BottomNavWrap>
    </div>
  )
}

const ProductDetailContainer = styled.section`
display: flex;  
justify-content: space-between; 
align-items: center;
width: 100vw; 
padding: 0 8%;   
  img {
    width: 60vw; 
    height: 80vh;  
  }
`
const TextSeller = styled.p`
  font-size: 16px; 
  color: #767676; 
  line-height: 1.5;  
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
// 상품 내용
const ProductInfo = styled.div`
display: flex; 
flex-direction: column; 
justify-content: space-between; 
box-sizing: border-box; 
padding-left: 50px; 
width: 100%; 
height: 80vh;  
`

const DeliveryInfo = styled.p`
  margin-bottom: 20px;
  font-size: 16px; 
  color: #767676; 
`
const ButtonContainer = styled.div`
width: 40vw; 
height: 100px; 
display: flex;
flex-direction: column;  
justify-content: center; 
align-items: flex-start; 
border-top: 1.5px solid #C4C4C4; 
border-bottom: 1px solid #C4C4C4; 
`
const ButtonWrap = styled.div`
  display: flex; 
  width: 144px; 
  border: 1px solid #C4C4C4; 
  border-radius: 5px;
  overflow: hidden;
`
const ButtonMinus = styled.button`
  background-color: black; 
  width: 48px; 
  height: 48px;   
  background: transparent url("/image/icon-minus-new.svg") no-repeat center / 20px;   
`
const ButtonPlus = styled.button`
  width: 48px; 
  height: 48px;    
  background: transparent url("/image/icon-plus-line.svg") no-repeat center / 20px;  
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
// 상품 가격
const ProductPrice = styled.div`
  display: flex; 
  align-items: center;
  width: 100%; 
  justify-content: space-between; 
  p {
    font-size: 18px; 
    color: #000; 
  }
`
const PriceDetail = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  p {
    font-size: 18px; 
    color: #767676; 
    span {  
      font-weight: 700; 
      color: #21BF48; 
    }
  }
  strong {
    color: #21BF48; 
    font-weight: 700; 
    font-size: 36px;  
    margin-bottom: 5px; 
    margin-left: 20px; 
  }
`
// 하단 버튼
const ShopButtonContainer = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  width: 100%; 

  button {
    height: 60px; 
    border-radius: 5px; 
    font-size: 18px; 
    color: #FFF; 
    font-weight: 700; 
  }
  .button-shop {
    width: 60%; 
    background-color: #21BF48; 
  }
  .button-basket {
    width: 35%;  
    background-color: #767676;
  }
`
const BottomNavWrap = styled.section `
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start;
  height: 50vh;
  margin-top: 5vh; 

`

const BottomNavButtonContainer = styled.section`
  width: 100vw;
  padding: 0 8%;   
  display: flex; 
  align-items: center; 
  
  button {
    width: 25%; 
    height: 60px; 
    font-size: 18px; 
    color: #767676; 
    background: #FFF; 
    border-bottom: 3px solid #E0E0E0; 
  }
  button:hover {
    color: #21BF48; 
    border-bottom: 3px solid #21BF48; 
  }
`