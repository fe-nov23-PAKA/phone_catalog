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
    <div className="slider-container mb-14 md:mb-16 xl:mb-20 md:container ">
      <h1 className=" slider-title mb-6 md:mb-8 text-4xl md:text-5xl container font-mont font-extrabold ">
        Welcome to Nice Gadgets store!
      </h1>
      <Slider {...settings} className="slider md:container">
        {imgIds.map((item) => (
          <div key={item} className="slider__banner w-full xl:items-center xl:justify-center">
            <a href="#home">
              <img
                src="../../public/img/Banner.png"
                alt="HerroBanner"
                className="slider__main-img md:container xl:ml-20"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};
