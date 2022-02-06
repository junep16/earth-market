import Navigation from "Components/Navigation/Navigation";
import ImageSlider from "Components/ImageSlider/ImageSlider";
import ProductContainer from "Components/ProductContainer/ProductContainer";
import Footer from "Components/Footer/Footer";
import GlobalFonts from "fonts/GlobalStyle"; 

export default function Homepage() {
  return (
  <div>
      <GlobalFonts /> 
      <Navigation></Navigation> 
      <ImageSlider></ImageSlider>
      <ProductContainer></ProductContainer>
      <Footer></Footer>
  </div>
  );
}

// TODO 
// 1. 판매상품 카드에 렌더링




