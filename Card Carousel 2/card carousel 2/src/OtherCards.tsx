import React from "react";
import Slider from "react-slick";

import './index.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function CenterMode() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div className="slider-container-2">
        <Slider {...settings}>
            <div className="Trend-2">
            <div className="card-2">1</div>
            </div>
            <div className="Trend-2">
            <div className="card-2">2</div>
            </div>
            <div className="Trend-2">
            <div className="card-2">3</div>
            </div>
            <div className="Trend-2">
            <div className="card-2">4</div>
            </div>
            <div className="Trend-2">
            <div className="card-2">5</div>
            </div>
            <div className="Trend-2">
            <div className="card-2">6</div>
            </div>
            <div className="Trend-2">
            <div className="card-2">7</div>
            </div>
            <div className="Trend-2">
            <div className="card-2">8</div>
            </div>
            <div className="Trend-2">
            <div className="card-2">9</div>
            </div>
        </Slider>
      </div>
    );
  }
  
  export default CenterMode;
  
