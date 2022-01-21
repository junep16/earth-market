import Home from "Pages/home/Home"; 
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components"; 
import GlobalFonts from "./fonts/fonts"; 

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
 * {
  box-sizing: border-box;
  font-family: 'KRRegular'
  }
`;


function App() {
  return (
    <div className="App">
      <GlobalFonts /> 
      <GlobalStyle />
      <header className="App-header">  
      </header>
      <main>
        <Home></Home>
      </main>
    </div>
  );
}

export default App;

