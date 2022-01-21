import React from "react";
import styled from "styled-components";
import IconFb from "../../icon/icon-fb.svg"; 
import IconInsta from "../../icon/icon-insta.svg"; 
import IconYt from "../../icon/icon-yt.svg"; 

export default function Footer() {
return (
  <div> 
    <FooterWrap>
      <BottomNavWrap>
        <Navigation>
          <li>
            <a href="www.naver.com">호두샵 소개</a>
          </li> 
          <li>
            <a href="www.naver.com">이용약관</a>
          </li> 
          <li>
            <a href="www.naver.com">개인정보처리방침</a>
          </li> 
          <li>
            <a href="www.naver.com">전자금융거래약관</a>
          </li> 
          <li>
            <a href="www.naver.com">청소년보호정책</a>
          </li> 
          <li>
            <a href="www.naver.com">제휴문의</a>
          </li> 
        </Navigation>
        <NavSNS>
          <li>
            <img src={IconInsta} alt="인스타그램" />
          </li>
          <li>
            <img src={IconFb} alt="페이스북" />
          </li>
          <li>
            <img src={IconYt} alt="페이스북" />
          </li>
        </NavSNS>
      </BottomNavWrap>
      <CompanyInfo> 
      <CompanyName>(주)HODU SHOP</CompanyName>
      <CompanyAddress>제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</CompanyAddress>
        <div>
          <dt>사업자 번호: </dt>
          <dd>000-0000-0000 | 통신판매업</dd> 
        </div>
        <div>
          <dt>대표: </dt>
          <dd>김호두</dd> 
        </div> 
      </CompanyInfo>
    </FooterWrap>
  </div> 
  );
}

const FooterWrap = styled.div`
  width: 100vw;  
  background: #F2F2F2; 
  padding: 0 8%; 
`
const BottomNavWrap = styled.section`
  width: 100%; 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  height: 10vh;
  border-bottom: 1px solid #C4C4C4; 

`
const Navigation = styled.ul`
  list-style:none; 
  display: flex; 
  align-items: center;
  font-size: 14px; 
  width: 40%; 
  justify-content: space-between; 
  li:hover {
    opacity: 0.3; 
  }
`
const NavSNS = styled.ul`
  list-style:none; 
  display: flex; 
  align-items: center; 
  width: 10%; 
  justify-content: space-between; 
`
const CompanyName = styled.strong`
  font-size: 14px; 
  font-weight: 700; 
  color: #767676;  
  line-height: 1.5; 
`
const CompanyAddress = styled.address`
  font-size: 14px;  
  color: #767676;
  line-height: 1.5;   
`
const CompanyInfo = styled.dl` 
  display: flex; 
  flex-direction: column;  
  height: 150px;  
  justify-content: center;
  font-size: 14px;  
  color: #767676; 
  div {
    display: flex; 
    align-items: center;  
    dt, dd {
      line-height: 1.5; 
    }
  }
`


