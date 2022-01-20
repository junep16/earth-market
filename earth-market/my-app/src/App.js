import Home from "./Pages/home/Home"; 
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components"; 

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
  font-family: 'Noto Sans KR', sans-serif;
  }
`;


function App() {
  return (
    <div className="App">
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

