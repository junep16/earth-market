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
        <DeleteButton type="button"></DeleteButton>
      </ModalContainer>
    </div>
  )
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
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
    margin-bottom: 40px; 
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