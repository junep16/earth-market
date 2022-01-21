import { createGlobalStyle } from 'styled-components'; 
import NotoSansKRRegular from './NotoSansKR-Regular.woff'; 
// import NotoSansKRBold from './NotoSansKR-Bold.woff'; 

export default createGlobalStyle `
  @font-face {
    font-family: 'KRRegular'; 
    src: local('KRRegular'),  
    url(${NotoSansKRRegular} format('woff');
    font-weight: 300;  
    font-style: normal;
  }
`