import React from "react";
import styled from "styled-components";

// functions 


export default function ProductCard() {
  // function 호출... 
  return (
    <div> 
      <Card>
        <ImageWrap>
          <img src="/image/01_sky.jpg" alt="제품이미지"></img>
        </ImageWrap>
          <TextSeller>우당탕탕 라이캣의 실험실</TextSeller>
          <TextProduct>Hack Your Life 개발자 노트북 파우치</TextProduct>
          <TextPrice>29,000 <span>원</span></TextPrice>
      </Card>
    </div> 
  );
}
const Card = styled.div`
  width: 380px;
  height: 490px;   
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

const ImageWrap = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  overflow: hidden; 
  width: 380px;
  height: 380px;  
  background-color: #666; 
  border-radius: 20px; 
  border: 1px solid #C4C4C4;
  img {
    width: 100%;
    height: 100%; 
  }
`

