import React from "react";
import styled from "styled-components";

export default function LoginForm() {
  return(
    <div>  
      <Form>
        <div>
          <label for="input-id"></label>
          <input type="text" id="input-id" placeholder="아이디"></input>
          <button type="button">중복확인</button>
        </div>
        <label for="input-pw">비밀번호</label>
        <input type="password" id="input-pw"></input>
        <label for="input-pw">비밀번호 재확인</label>
        <input type="password" id="input-pw"></input> 
        <label for="input-name">이름</label>
        <input type="text" id="input-name"></input> 
        <div> 
          <label for="input-phone">휴대폰 번호</label>
          <input type="text" id="input-phone" placeholder="010"></input>
          <ul>
            <li></li>
          </ul> 
          <input type="text" id="input-phone"></input>
          <input type="text" id="input-phone"></input>
        </div>
        <div>
          <label for="input-email">이메일</label>
          <input type="text" id="input-email"></input> 
          <span>@</span>
          <input type="text" id="input-email"></input> 
        </div>
        <label for="input-company-no">사업자 번호</label>
        <input type="text" id="input-company-no"></input>
        <label for="input-company-name">스토어 이름</label>
        <input type="text" id="input-company-name"></input> 
      </Form> 
      <label for=""></label>
      <input type="checkbox"></input>
      <p>호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.</p>
      
    </div>
  )
}
const Form = styled.form`
  display: flex; 
  flex-direction: column; 
  box-sizing: border-box; 
  justify-content: space-evenly; 
  width: 500px;  
  border: 1px solid #C4C4C4; 
  border-radius: 10px;
  padding: 8% 5%;  
  z-index: 30; 
  input {
    height: 40px; 
    font-size: 16px; 
    color: 767676;  
    margin-bottom: 5px; 
    border-style: none; 
    border-bottom: 1px solid #C4C4C4; 
  }
  span {
    color: #EB5757; 
    line-height: 2; 
  }
  button {
    height: 40px; 
    background-color: #218060; 
    color: #FFF; 
    font-size: 18px; 
    font-weight: 700;
    font-size: 18px; 
    border-radius: 5px;  
    margin-top: 20px;
  }
  button:hover {
    opacity: 0.7; 
  }
`