import React from "react";
import "./Slide.scss";

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  slidesToShow: 5,
  arrows: true
};
const Slide = ({ children }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings} >
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;