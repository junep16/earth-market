import Navigation from "Components/Navigation/Navigation";
import ProductDetail from "Components/ProductDetail/ProductDetail";
import Footer from "Components/Footer/Footer";
import GlobalFonts from "fonts/GlobalStyle"; 

export default function Product() {   
    return (
    <div>
        <GlobalFonts /> 
        <Navigation></Navigation>  
        <ProductDetail></ProductDetail>
        <Footer></Footer>
    </div>
    );
}