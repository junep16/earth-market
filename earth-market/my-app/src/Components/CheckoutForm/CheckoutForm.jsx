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
            <input type="text" id="user-name"></input>
          </div>
          <PhoneNumber>
            <label htmlFor="user-phone">휴대폰</label>
            <input type="number" id="user-phone"></input>
            <span>-</span>
            <input type="number" id="user-phone"></input>
            <span>-</span>
            <input type="number" id="user-phone"></input>
          </PhoneNumber>
          <div>
            <label htmlFor="user-email">이메일</label>
            <input type="text" id="user-email"></input>
          </div>
        </UserInfo>
        <UserInfo>
          <p>배송지 정보</p>
          <div>
            <label htmlFor="user-receiver">수령인</label>
            <input type="text" id="user-receiver"></input>
          </div>
          <PhoneNumber>
            <label htmlFor="user-phone">휴대폰</label>
            <input type="number" id="user-phone"></input>
            <span>-</span>
            <input type="number" id="user-phone"></input>
            <span>-</span>
            <input type="number" id="user-phone"></input>
          </PhoneNumber>
          <AddressPostWrap>
            <label htmlFor="user-addresss">배송주소</label>
            <input type="text" id="user-addresss"></input>
            <button type="button">우편번호 조회</button>
          </AddressPostWrap> 
          <AddressWrap>
            <input type="text"></input>
          </AddressWrap>
          <AddressWrap>
            <input type="text"></input>
          </AddressWrap> 
          <div>
            <label htmlFor="user-message">배송메세지</label>
            <input type="text" id="user-message"></input> 
          </div> 
        </UserInfo>
        <PaymentContainer>
          <PaymentInfoWrap>
            <PaymentInfoTitle>결제수단</PaymentInfoTitle> 
            <label htmlFor="card">
              <input type="radio" id="card"/>  
              신용/체크카드
            </label>
            <label htmlFor="wire">
              <input type="radio" id="wire"/>  
              무통장입금
            </label>
            <label htmlFor="phone">
              <input type="radio" id="phone"/>  
              휴대폰 결제
            </label>
            <label htmlFor="naver">
              <input type="radio" id="naver"/>  
              네이버페이 
            </label>
            <label htmlFor="kakao">
              <input type="radio" id="kakao"/>  
              카카오페이 
            </label>
          </PaymentInfoWrap>
          <FinalPaymentInfoWrap>
            <FinalPaymentInfoTitle>최종결제 정보</FinalPaymentInfoTitle> 
            <FinalPaymentInfo>
              <div>
                <p>상품금액</p>
                <p><span>46,500</span>원</p>
              </div>
              <div>
                <p>할인금액</p>
                <p><span>0</span>원</p>
              </div>
              <div>
                <p>배송비</p>
                <p><span>46,500</span>원</p>
              </div>
              <div>
                <p>결제금액</p>
                <p><span>46,500</span>원</p>
              </div>
              <FinalInfo>
                <label htmlFor="">
                  <input type="checkbox" />
                  주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
                </label>
                <button type="button">결제하기</button>
              </FinalInfo>
            </FinalPaymentInfo>
          </FinalPaymentInfoWrap>
        </PaymentContainer>

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

// 유저 배송 정보
const UserInfo = styled.section`
  display: flex; 
  flex-direction: column; 
  justify-content: center;  
  align-items: flex-start; 
  width: 100%; 
  margin-top: 20px; 
  p {
    text-align: left; 
    border-bottom: 2px solid #C4C4C4; 
    width: 100%; 
    line-height: 2; 
  }

  div {
    display: flex; 
    align-items: center; 
    justify-content: flex-start;  
    flex-basis: 60px; 
    border-bottom: 1px solid #C4C4C4; 
    width: 100%; 
    
    label {
      text-align: left;
      width: 100px;  
    }
    input {    
      border-style: none; 
      border: 1px solid #C4C4C4; 
      box-sizing: border-box; 
      padding: 5px; 
      font-size: 18px;  
    }
    #user-name, 
    #user-email,
    #user-reveiver {
      width: 335px; 
    }
    #user-message {
      width: 800px;
    }
  }
`
const PhoneNumber = styled.div`
  #user-phone {
    width: 100px; 
  } 
  span {
    margin: 0 6px; 
  }
`
const AddressPostWrap = styled.div`
  input {
    width: 170px; 
  }
  button { 
    width: 155px; 
    height: 40px; 
    background-color: #21BF48; 
    color: #FFF; 
    font-size: 16px; 
    border-radius: 5px; 
    margin-left: 10px; 

    &:hover {
      opacity: 0.3; 
    }
  }

`
const AddressWrap = styled.div`
  input {
    margin-left: 100px; 
    width: 800px; 
  }
`

// 결제 정보 
const PaymentContainer = styled.article`
  display: flex;
  align-items: flex-start; 
  justify-content: space-between; 
  margin-top: 50px; 
`

const PaymentInfoTitle = styled.p`
  text-align: left; 
  font-size: 24px; 
  border-bottom: 2px solid #C4C4C4; 
  line-height: 2;  
`
const PaymentInfoWrap = styled.section` 
  width: 40vw; 
  text-align: left; 
  border-bottom: 2px solid #C4C4C4; 
  label {
    margin-right:10px; 
    font-size: 16px; 
    line-height: 3;
  }
`
// 최종 결제 정보
const FinalPaymentInfoTitle = styled.p`
  text-align: left; 
  font-size: 24px; 
  border-bottom: 2px solid #C4C4C4; 
  line-height: 2; 
`
const FinalPaymentInfoWrap = styled.section` 
  width: 40vw; 
  text-align: left;  
`
const FinalPaymentInfo = styled.div`
  width: 100%; 
  border: 2px solid #21BF48; 
  box-sizing: border-box; 
  padding: 30px; 
  border-radius: 5px; 
  margin-top: 20px;  

  div {
    width: 100%; 
    display: flex; 
    justify-content: space-between;
    margin: 10px 0;
    p { 
      &:nth-child(2) { 
        font-size: 14px; 
        color: #767676; 
        span {
          font-size: 18px; 
          font-weight: 700; 
          color: #000; 
          margin-right: 5px; 
        }
      }
    }
    &:nth-child(3) {
      padding-bottom: 20px; 
      border-bottom: 1px solid #C4C4C4; 
    }
  }
`
const FinalInfo = styled.section`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  background-color: #F2F2F2; 
  height: 200px;  
  justify-content: space-evenly; 
  button { 
    font-size: 24px; 
    font-weight: 700; 
    border-radius: 5px; 
    color: #FFF; 
    width: 200px; 
    height: 70px; 
    background-color: #C4C4C4; 
  }
  button.on {  
    background-color: #21BF48; 
  }
` 

