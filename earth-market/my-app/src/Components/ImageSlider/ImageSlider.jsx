import "./imageslider.css"; 

export default function ImageSlider() {
  return (
    <div class="image-slider">
      <div class="image-slider-window">
        <ul class="image-slider-container">
          <li class="image-wrap">
            <img src="/image/01_sky.jpg" alt="하늘사진" class="image"/>
          </li>
        </ul>
      </div>
      <div class="button-control-wrap">
        <div class="slide-button one on" type="button"></div>
        <div class="slide-button two on" type="button"></div>
        <div class="slide-button three on" type="button"></div>
        <div class="slide-button four on" type="button"></div>
        <div class="slide-button five on" type="button"></div>
        <div class="slide-button six on" type="button"></div>
      </div>
      <div class="subbutton-control-wrap">
        <button type="button" class="slide-arrow left"></button> 
        <button type="button" class="slide-arrow right"></button> 
      </div>
    </div>
)
}