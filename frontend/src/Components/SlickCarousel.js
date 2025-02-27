import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/Image1.jpeg";
import Image2 from "../assets/Image2.jpeg";
import Image3 from "../assets/Image3.jpeg";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slick-carousel-container">
      <Slider {...settings}>
        <div>
          <img src={Image3} alt="Slide 1" />
        </div>
        <div>
          <img src={Image2} alt="Slide 2" />
        </div>
        <div>
          <img src={Image1} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SlickCarousel;
