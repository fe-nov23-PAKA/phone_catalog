/* eslint-disable operator-linebreak */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Item } from "../../types/Item";
import { AddToCartButton } from "../UI/AddToCartButton";
import { AddToFavouritesButton } from "../UI/AddToFavouritesButton";
import { CardLoader } from "../UI/Loader/CardLoader/CardLoader";

type Props = {
  item: Item;
  classname?: string;
  setItemCarouselWidth?: (number: number) => void;
};

export const ProductCard: React.FC<Props> = ({
  item,
  classname,
  setItemCarouselWidth,
}) => {
  const { name, capacity, fullPrice, price, screen, image, ram } = item;

  const carouselItemRef = useRef<HTMLLIElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselItemRef.current && setItemCarouselWidth) {
        setItemCarouselWidth(carouselItemRef.current.offsetWidth);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [setItemCarouselWidth]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <li
      ref={carouselItemRef}
      className={classNames(
        "col-span-full box-border h-full w-full rounded-lg border",
        "dark:border-dark-surface1 dark:bg-dark-surface1 border-element-color transition-all sm:col-span-6 md:col-span-4 xl:col-span-6",
        { [`${classname}`]: classname },
      )}
    >
      <div className="p-[32px] transition-all hover:shadow-sh2 dark:hover:shadow-zinc-700">
        <Link to={`../${item.category}/${item.itemId}`}>
          <div className=" relative mb-2 flex h-[196px] items-center justify-center">
            {isLoading ? (
              <CardLoader />
            ) : (
              <img
                className="block h-full w-full object-contain transition-all hover:scale-[1.1]"
                src={image}
                alt="Product"
              />
            )}
          </div>
          <h3
            className="dark:text-dark-white flex min-h-[58px] flex-col 
          justify-end text-[14px]/[21px] font-semibold transition-all"
          >
            {name}
          </h3>
        </Link>
        <div className="justify-flex-start mb-2 flex items-center">
          <span className="dark:text-dark-white text-main font-extrabold leading-8 transition-all">
            ${price}
          </span>
          <span
            className="
          dark:text-dark-secondary ml-2 text-main font-semibold
          leading-7 text-secondary line-through transition-all"
          >
            ${fullPrice}
          </span>
        </div>
        <div className="dark:border-dark-elements mb-2 border" />
        <div className="mb-2 flex flex-col gap-y-2 py-2">
          <div className="flex items-center justify-between">
            <div className="dark:text-dark-secondary text-xs font-bold text-secondary transition-all">
              Screen
            </div>
            <div className="dark:text-dark-white text-xs font-bold transition-all">
              {screen}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="
            dark:text-dark-secondary text-xs font-bold text-secondary transition-all"
            >
              Capacity
            </div>
            <div className="dark:text-dark-white text-xs font-bold transition-all">
              {capacity}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="
            dark:text-dark-secondary text-xs font-bold text-secondary transition-all"
            >
              RAM
            </div>
            <div className="dark:text-dark-white text-xs font-bold transition-all">
              {ram}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-x-2">
          <AddToCartButton item={item} />
          <AddToFavouritesButton item={item} />
        </div>
      </div>
    </li>
  );
};
