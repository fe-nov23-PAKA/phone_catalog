import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import banner from "../../assets/img/Banner.png";
import bannerPhones from "../../assets/img/banner-phones.png";
import bannerTablets from "../../assets/img/banner-tablets.png";
import bannerAccessories from "../../assets/img/phone-accessories-1.jpg";

export const Carousel: React.FC = () => {
  const imgIds = [banner, bannerPhones, bannerTablets, bannerAccessories];

  function SampleNextArrow(props: CustomArrowProps) {
    const { onClick } = props;

    return (
      <button
        type="button"
        className={
          localStorage.getItem("theme") === "dark"
            ? "dark_slick-next"
            : "slick-next"
        }
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: CustomArrowProps) {
    const { onClick } = props;

    return (
      <button
        type="button"
        className={
          localStorage.getItem("theme") === "dark"
            ? "dark_slick-prev"
            : "slick-prev"
        }
        onClick={onClick}
      />
    );
  }

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
        className={
          localStorage.getItem("theme") === "dark"
            ? "dark_slick-dot"
            : "slick-dot"
        }
        style={{
          width: "14px",
          height: "4px",
          marginTop: 18,
          marginRight: 14,
        }}
      />
    ),
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <Slider {...settings} className="carousel">
      {imgIds.map((item) => (
        <div key={item} className="carousel__banner">
          <img src={item} alt="HeroBanner" className="carousel__main-img" />
        </div>
      ))}
    </Slider>
  );
};
