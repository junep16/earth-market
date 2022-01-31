import React from "react";
import styled from "styled-components";

export default function CheckoutForm() {
  return (
    <div> 
      <form>
        <FormTitle>배송정보</FormTitle>
        <UserInfo>
          <p>주문자 정보</p>
          <div>
            <label htmlFor="user-name">이름</label>
            <input type="text"></input>
          </div>
          <div>
            <label htmlFor="user-phone">휴대폰</label>
            <input type="number" id="user-phone"></input>
            <input type="number" id="user-phone"></input>
            <input type="number" id="user-phone"></input>
          </div>
          <div>
            <label htmlFor="user-email">이메일</label>
            <input type="number" id="user-email"></input>
          </div>
        </UserInfo>
      </form>
    </div>
  )
}
const FormTitle = styled.p`
  text-align: left; 
  font-size: 24px; 
  border-bottom: 2px solid #C4C4C4; 
  line-height: 2; 
`

const UserInfo = styled.section`
  display: flex; 
  flex-direction: column; 
  justify-content: center;  
  align-items: flex-start; 
  width: 100%; 
  margin-top: 20px; 
  p {
    text-align: left; 
    border-bottom: 1px solid #C4C4C4; 
    width: 100%; 
    line-height: 2; 
  }

  div {
    display: flex; 
    align-items: center; 
    justify-content: flex-start;  
    flex-basis: 40px; 
    border-bottom: 1px solid #C4C4C4; 
    width: 100%; 

    
    label {
      text-align: left;
      width: 100px;  
    }
    input { 

    }
  }
`