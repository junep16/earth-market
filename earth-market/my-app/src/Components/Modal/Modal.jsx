import React from "react";
import styled from "styled-components";

export default function Modal() {
  return (
    <div>
      <ModalContainer>
        <div>
          <p>상품을 삭제하시겠습니까?</p>
          <ButtonContainer>
            <button type="button">취소</button>
            <button type="button">확인</button>
          </ButtonContainer>
        </div>
      </ModalContainer>
    </div>
  )
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column; 
  text-align: center;
  position: fixed; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  width: 360px; 
  height: 200px; 
  background: #FFF; 
  border: 1px solid #C4C4C4; 
  border-radius: 5px; 

  p {
    line-height: 4; 
  }
` 
const ButtonContainer = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  width: 210px; 
  
  button {
    width: 100px; 
    height: 40px;  

    &:first-child {
      border: 1px solid #C4C4C4; 
      border-radius: 5px; 
      color: #767676; 
      background-color: #FFF; 
    }
    &:nth-child(2) {
      background-color: #21BF48; 
      color: #FFF; 
      border-radius: 5px; 
    }
  }
`