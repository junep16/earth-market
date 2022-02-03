import React from "react";
import styled from "styled-components";
import Form from "Components/Form/Form";
import Logo from "icon/urthmarket_logo.png"; 

export default function Join() {
  return(
    <div>
      <JoinSection>
        <img src={Logo} alt="어스마켓 로고" />
        <Form></Form>
      </JoinSection>
    </div>
  )
} 

const JoinSection = styled.section`
  width: 100vw;  
  background: #FFF; 
  padding: 5% 8%; 
  display: flex; 
  flex-direction: column;
  justify-content: center;  
  align-items: center;  
  
  img {
    width: 340px;  
  }
`
