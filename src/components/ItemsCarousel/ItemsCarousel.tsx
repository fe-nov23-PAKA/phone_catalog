/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import AOS from "aos";
import { ProductCard } from "../ProductCard";
import { ArrowLeft } from "../../icons/Arrow-Left";
import { ArrowRight } from "../../icons/Arrow-Right";
import { Item } from "../../types/Item";
import { SortType } from "../../types/SortType";
import { getItemsToShow } from "../../utils/getItemsToShow";
import { useAppSelector } from "../../app/hooks";
import "aos/dist/aos.css";

interface Props {
  titleName: SortType;
  startVisibleItems: Item[];
}

export const ItemsCarousel: React.FC<Props> = ({
  titleName,
  startVisibleItems,
}) => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [itemCarouselWidth, setItemCarouselWidth] = useState(300);
  const [scrollDistance, setScrollDistance] = useState(300);

  const carouselRef = useRef<HTMLUListElement>(null);

  const visibleItems = useMemo(
    () => getItemsToShow(titleName, startVisibleItems),
    [],
  );
  const ITEMS_GAP = 16;
  const theme = useAppSelector((state) => state.theme);

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
  }, [startVisibleItems]);

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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="pb-20" data-aos="fade-up">
        <div className="flex items-center justify-between pb-6">
          <h2 className="text-[32px] font-extrabold leading-[41px] transition-all dark:text-dark-white">
            {titleName}
          </h2>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleScrollLeft}
              className={classNames(
                "flex h-8 w-8 items-center justify-center rounded-full border border-icons-color transition-all hover:border-primary dark:rounded-none dark:border-dark-surface2 dark:bg-dark-surface2 dark:hover:border-dark-icons dark:hover:bg-dark-icons",
                { "pointer-events-none opacity-50": isAtStart },
              )}
            >
              <ArrowLeft fill={theme === "dark" ? "#F1F2F9" : "#0F0F11"} />
            </button>
            <button
              type="button"
              onClick={handleScrollRight}
              className={classNames(
                "flex h-8 w-8 items-center justify-center rounded-full border border-icons-color transition-all hover:border-primary dark:rounded-none dark:border-dark-surface2 dark:bg-dark-surface2 dark:hover:border-dark-icons dark:hover:bg-dark-icons",
                { "pointer-events-none opacity-50": isAtEnd },
              )}
            >
              <ArrowRight fill={theme === "dark" ? "#F1F2F9" : "#0F0F11"} />
            </button>
          </div>
        </div>
        <ul
          style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
          ref={carouselRef}
          className="flex list-none gap-x-[16px] overflow-auto sm:p-2"
        >
          {visibleItems.map((phone) => (
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
