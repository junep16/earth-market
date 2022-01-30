import Navigation from "Components/Navigation/Navigation";  
import CheckoutContainer from "Components/CheckoutContainer/CheckoutContainer";
import Footer from "Components/Footer/Footer";
import GlobalFonts from "fonts/GlobalStyle"; 

export default function Cart() {   
  return (
    <div>
      <GlobalFonts /> 
      <Navigation></Navigation>  
      <CheckoutContainer></CheckoutContainer>
      <Footer></Footer>
    </div>
  );
}