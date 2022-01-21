import Home from "Pages/home/Home"; 
import Join from "Pages/join/Join"; 
import GlobalStyle from "fonts/GlobalStyle"; 
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return ( 
    <div> 
      <GlobalStyle/>
      <header>  
      </header>
      <main>
      <BrowserRouter>
        <Route path="/" exact component={Home}/>  
        <Route path="/join" exact component={Join}/>  
      </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
