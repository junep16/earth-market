import { createGlobalStyle } from 'styled-components';  
import reset from "styled-reset";
import "./fonts.css";    

const GlobalStyle = createGlobalStyle`
  ${reset}; 
  a{
    text-decoration : none;
    color : inherit;
  }
  button{
    border : none;
    cursor : pointer;
  }
  *, html, body {
  box-sizing: border-box;
  font-family: "NotoSansKR"
  }
`;

export default GlobalStyle; 