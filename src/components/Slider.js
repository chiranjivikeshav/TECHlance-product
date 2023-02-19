// ........THIS FILE CONTAINS A AUTOMATIC SLIDER (CAROUSEL) WHICH CONTAINS THREE PICTURE.......

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Slider() {
return (
  <Carousel>
    <Carousel.Item>
      <img
        className="SliderBox" 
        src="https://images.vexels.com/content/194731/preview/shop-online-web-slider-design-e2862a.png"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="SliderBox"
        src="https://images.vexels.com/content/194700/preview/buy-online-slider-template-4261dd.png"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="SliderBox"
        src="https://img.freepik.com/premium-photo/online-shopping-design-shopping-trolleys-with-long-receipts-advertising-poster-banner-3d-illustration_34478-1198.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
);
}

export default Slider;