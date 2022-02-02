import React from "react";
import styled from "styled-components";

export default function Modal() {
  return (
    <div>
      <ModalContainer>
        <Modals>
          <p>상품을 삭제하시겠습니까?</p>
          <button type="button">취소</button>
          <button type="button">확인</button>
        </Modals>
      </ModalContainer>
    </div>
  )
}

const ModalContainer = styled.div`
  position: fixed; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  width: 360px; 
  height: 200px; 
  background: #FFF; 
  border: 1px solid #C4C4C4; 
  border-radius: 5px;
`
const Modals = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  
  button {
    display: inline;
  }

`