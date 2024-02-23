import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import banner from "../../assets/img/Banner.png";

export const Carousel: React.FC = () => {
  const imgIds = [1, 2, 3];
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
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
    <Slider {...settings} className="carousel">
      {imgIds.map((item) => (
        <div key={item} className="carousel__banner">
          <img src={banner} alt="HeroBanner" className="carousel__main-img" />
        </div>
      ))}
    </Slider>
  );
};
