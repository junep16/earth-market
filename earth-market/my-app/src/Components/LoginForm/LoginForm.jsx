import React from "react";
import styled from "styled-components";

export default function LoginForm() {
  return(
    <div>  
      <Form>
        <label for="input-id"></label>
        <input type="text" id="input-id" placeholder="아이디"></input>
        <label for="input-pw"></label>
        <input type="password" id="input-pw" placeholder="비밀번호"></input>
        <span>아이디 또는 비밀번호가 일치하지 않습니다.</span>
        <button type="button">로그인</button>
      </Form> 
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
    height: 60px; 
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
    height: 60px; 
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