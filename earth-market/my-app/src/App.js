import Home from "Pages/home/Home"; 
import Join from "Pages/join/Join"; 
import Product from "Pages/product/Product"; 
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
        <Route path="/product" exact component={Product}/>  
      </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
