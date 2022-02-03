import React from "react";
import styled from "styled-components";
// import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "Components/LoginForm/LoginForm"; 
import JoinForm from "Components/JoinForm/JoinForm"; 

export default function Form() {
  return(
    <div>   
      <JoinForm></JoinForm>
      <Navigation>
        <a href="넣기">회원가입</a>
        <a href="넣기">로그인</a>
      </Navigation>
    </div>
  )
}

const Navigation = styled.div`
  display: flex; 
  width: 500px; 
  justify-content: center; 
  align-items: center; 
  font-size: 16px; 
  margin: 20px 0; 

  a:first-child::after {
    content: "|"; 
    color: #333; 
    font-size: 14px;  
    margin: 0 10px;
  }
`

