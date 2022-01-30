import Navigation from "Components/Navigation/Navigation";  
import CartContainer from "Components/CartContainer/CartContainer";
import Footer from "Components/Footer/Footer";
import GlobalFonts from "fonts/GlobalStyle"; 

export default function Cart() {   
  return (
    <div>
      <GlobalFonts /> 
      <Navigation></Navigation>  
      <CartContainer></CartContainer>
      <Footer></Footer>
    </div>
  );
}