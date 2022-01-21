import React from "react";
import styled from "styled-components";
// import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "Components/LoginForm/LoginForm"; 
import JoinForm from "Components/JoinForm/JoinForm"; 

export default function Form() {
  return(
    <div> 
      <ButtonWrap>
        <LoginButton type="button">구매회원 로그인</LoginButton>
        <JoinButton type="button">판매회원 로그인</JoinButton>
      </ButtonWrap>  
      {/* <LoginForm></LoginForm> */}
      <JoinForm></JoinForm>
      <Navigation>
        <a href="넣기">회원가입</a>
        <a href="넣기">로그인</a>
      </Navigation>
    </div>
  )
}

const ButtonWrap = styled.div`
  position:relative; 
  height: 30%;  
`
const LoginButton = styled.button`
  position: absolute; 
  top: 40px; 
  width: 250px; 
  height: 80px; 
  background-color: #FFF; 
  border-radius: 10px; 
  border: 1px solid #C4C4C4; 
`
const JoinButton = styled.button`
  position: absolute; 
  top: 40px; 
  left: 250px;
  width: 250px; 
  height: 80px; 
  background-color: #F2F2F2; 
  border-radius: 10px; 
  border: 1px solid #C4C4C4; 
`
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

