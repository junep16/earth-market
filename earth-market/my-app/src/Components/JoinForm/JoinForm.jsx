import React from "react";
import styled from "styled-components";

export default function LoginForm() {
  return(
    <div>
      <Form> 
          <label for="input-id">아이디</label>
        <UserIdWrap>
          <input type="text" id="input-id"></input>
          <button type="button">중복확인</button>
        </UserIdWrap>
        <label for="input-pw">비밀번호</label>
        <input type="password" id="input-pw"></input>
        <label for="input-pw">비밀번호 재확인</label>
        <input type="password" id="input-pw"></input> 
        <label for="input-name">이름</label>
        <input type="text" id="input-name"></input> 
        <PhoneNumberContainer> 
          <label for="input-phone">휴대폰 번호</label>
          <button  class="button-phone" type="button">010</button> 
          <input type="text" id="input-phone"></input>
          <input type="text" id="input-phone"></input>
        </PhoneNumberContainer>
        <EmailContainer>
          <label for="input-email">이메일</label>
          <input type="text" id="input-email"></input> 
          <span>@</span>
          <input type="text" id="input-email"></input> 
        </EmailContainer> 
      </Form> 
      <AgreementContainer>
        <label for=""></label>
        <input type="checkbox"></input>
        <p>호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.</p>
      </AgreementContainer>
      <SubmitButton type="button" class="on">가입하기</SubmitButton>
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
  margin: 20px 0; 
  label {
    margin-bottom: 5px; 
  }
  input {
    height: 40px; 
    font-size: 16px; 
    color: 767676;  
    margin-bottom: 10px; 
    border-style: none; 
    border: 1px solid #C4C4C4; 
    border-radius: 5px; 
  }
  span {
    color: #EB5757; 
    line-height: 2; 
  }
`
const UserIdWrap = styled.div`
  input {
    width: 80%; 
  }
  button {
    height: 40px; 
    background-color: #218060; 
    color: #FFF; 
    font-size: 16px;  
    border-radius: 5px;   
    float: right; 
  }
  button:hover {
    opacity: 0.7; 
  }
`

const PhoneNumberContainer = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  flex-wrap: wrap; 
  margin-bottom: 10px; 
  label {  
    width: 100%; 
  }
  button {  
    height: 40px;  
    width: 140px; 
    border: 1px solid #C4C4C4; 
    border-radius: 5px; 
    background: #FFF; 
  }
  input{ 
    margin: 0; 
    width: 140px; 
  }
  /* input:focus { 
    border: 1px solid #21BF48; 
  } */
`

const EmailContainer = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  flex-wrap: wrap; 
  margin-bottom: 10px; 
  label {
    width: 100%; 
  }
  input {
    width: 200px; 
  }
  span {
    color: #767676; 
    margin-bottom: 10px;  
  }
`

const AgreementContainer = styled.div`
  display: flex; 
  width: 500px; 
  margin: 20px 0; 
  p {
    font-size: 16px; 
    color: #767676; 
  }
`

const SubmitButton = styled.button`
  width: 500px; 
  height: 40px; 
  font-weight: 700;
  border-radius: 5px; 
  background: #C4C4C4; 
  color: #FFF; 
`
