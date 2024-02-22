import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

export const Carousel: React.FC = () => {
  const imgIds = [1, 2, 3];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    customPaging: () => (
      <div
        className="slick-dot"
        style={{
          width: "14px",
          height: "4px",
          marginTop: 18,
          marginRight: 14,
        }}
      />
    ),
  };

  return (
    <div className="container-carousel">
      <div className="carousel-wrapper">
        <h1 className="carousel__title">Welcome to Nice Gadgets store!</h1>
        <Slider {...settings} className="carousel">
          {imgIds.map((item) => (
            <div key={item} className="carousel__banner">
              <img src="../public/img/Banner.png" alt="HeroBanner" className="carousel__main-img" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
