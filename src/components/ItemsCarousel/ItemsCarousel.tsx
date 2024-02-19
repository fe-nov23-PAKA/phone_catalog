/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from "react";
import { Phone } from "../../types/Phone";
import arrow_left_black from "../../assets/img/icons/arrow-left-black.svg";
import arrow_right_black from "../../assets/img/icons/arrow-right-black.svg";
import { ProductCard } from "../ProductCard";

interface Props {
  titleName: string;
  startVisiblePhones: Phone[];
}

export const ItemsCarousel: React.FC<Props> = ({
  titleName,
  startVisiblePhones,
}) => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const carouselRef = useRef<HTMLUListElement>(null);

  const visiblePhones = startVisiblePhones.slice(0, 20);

  useEffect(() => {
    const handleScroll = () => {
      const currentCarouselRef = carouselRef.current;

      if (currentCarouselRef) {
        setIsAtStart(currentCarouselRef.scrollLeft === 0);
        setIsAtEnd(
          Math.ceil(currentCarouselRef.scrollLeft + currentCarouselRef.offsetWidth) >= currentCarouselRef.scrollWidth,
        );
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [startVisiblePhones]);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300;
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300;
    }
  };

  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between pb-6">
          <h2 className="text-[32px] font-extrabold">{titleName}</h2>
          <div className="flex gap-4">
            <a
              onClick={handleScrollLeft}
              href="#/"
              className={`flex h-8 w-8 items-center justify-center rounded-full border ${isAtStart ? "cursor-pointer opacity-50" : ""}`}
            >
              <img src={arrow_left_black} alt="arrow-left" />
            </a>
            <a
              onClick={handleScrollRight}
              href="#/"
              className={`flex h-8 w-8 items-center justify-center rounded-full border ${isAtEnd ? "cursor-pointer opacity-50" : ""}`}
            >
              <img src={arrow_right_black} alt="arrow-right" />
            </a>
          </div>
        </div>
        <ul
          style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
          ref={carouselRef}
          className="flex list-none gap-x-4 overflow-auto "
        >
          {visiblePhones.map((phone) => ( 
            <ProductCard key={phone.id} phone={phone} />
          ))}
        </ul>
      </div>
    </>
  );
};
