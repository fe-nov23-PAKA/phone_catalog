/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { ProductCard } from "../ProductCard";
import { ArrowLeft } from "../../icons/Arrow-Left";
import { ArrowRight } from "../../icons/Arrow-Right";
import { Item } from '../../types/Item';

interface Props {
  titleName: string;
  startVisiblePhones: Item[];
}

export const ItemsCarousel: React.FC<Props> = ({
  titleName,
  startVisiblePhones,
}) => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [itemCarouselWidth, setItemCarouselWidth] = useState(300);
  const [scrollDistance, setScrollDistance] = useState(300);

  const carouselRef = useRef<HTMLUListElement>(null);

  const visiblePhones = startVisiblePhones.slice(0, 20);
  const ITEMS_GAP = 16;

  useEffect(() => {
    let newScroll = itemCarouselWidth + ITEMS_GAP;

    if (window.innerWidth < 640 && carouselRef.current) {
      newScroll = carouselRef.current.offsetWidth + ITEMS_GAP - 1;
    }

    setScrollDistance(newScroll);
  }, [itemCarouselWidth, carouselRef, scrollDistance]);

  useEffect(() => {
    const handleScroll = () => {
      const currentCarouselRef = carouselRef.current;

      if (currentCarouselRef) {
        setIsAtStart(currentCarouselRef.scrollLeft === 0);
        setIsAtEnd(
          Math.ceil(
            currentCarouselRef.scrollLeft + currentCarouselRef.offsetWidth,
          ) >= currentCarouselRef.scrollWidth,
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
      carouselRef.current.scrollLeft -= scrollDistance;
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollDistance;
    }
  };

  return (
    <>
      <div className="container pb-20">
        <div className="flex items-center justify-between pb-6">
          <h2 className="text-[32px] font-extrabold leading-[41px]">
            {titleName}
          </h2>
          <div className="flex gap-4">
            <a
              onClick={handleScrollLeft}
              href="#/"
              className={classNames(
                "flex h-8 w-8 items-center justify-center rounded-full border",
                { "pointer-events-none opacity-50": isAtStart },
              )}
            >
              <ArrowLeft fill="#0F0F11" />
            </a>
            <a
              onClick={handleScrollRight}
              href="#/"
              className={classNames(
                "flex h-8 w-8 items-center justify-center rounded-full border",
                { "pointer-events-none opacity-50": isAtEnd },
              )}
            >
              <ArrowRight fill="#0F0F11" />
            </a>
          </div>
        </div>
        <ul
          style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
          ref={carouselRef}
          className="flex list-none gap-x-[16px] overflow-auto p-2"
        >
          {visiblePhones.map((phone) => (
            <ProductCard
              setItemCarouselWidth={setItemCarouselWidth}
              key={phone.id}
              item={phone}
              classname="sm:min-w-[294px] min-w-[271px]"
            />
          ))}
        </ul>
      </div>
    </>
  );
};
