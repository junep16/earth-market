import React from "react";
import styled from "styled-components";

export default function CheckoutMenuHead() {
  return ( 
    <div>
        <MenuHeadWrap> 
          <span>상품정보</span>
          <span>할인</span>
          <span>배송비</span>
          <span>주문금액</span>
        </MenuHeadWrap> 
    </div>
  )
}

const MenuHeadWrap = styled.div`
  display: grid; 
  grid-template-columns: 3fr 1fr 1fr 1fr; 
  align-items: center; 
  width: 100%; 
  height: 60px; 
  background: #F2F2F2; 
  border-radius: 10px; 
  box-sizing: border-box; 
  padding: 0 20px;   
  p { 
    font-size: 18px; 
    font-weight: 400; 
    line-height: 1; 
  }
`