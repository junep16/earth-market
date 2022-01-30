import React from "react";
import styled from "styled-components";

export default function MenuHead() {
  return ( 
    <div>
        <MenuHeadWrap>
          <div>
            <label htmlFor="input-selectall"></label>
            <input type="radio" />
          </div>
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>
        </MenuHeadWrap> 
    </div>
  )
}

const MenuHeadWrap = styled.div`
  display: grid; 
  grid-template-columns: 0.5fr 4fr 2fr 2fr; 
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