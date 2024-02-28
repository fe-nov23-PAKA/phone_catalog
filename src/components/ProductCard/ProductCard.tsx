/* eslint-disable operator-linebreak */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Item } from "../../types/Item";
import { AddToCartButton } from "../UI/AddToCartButton";
import { AddToFavouritesButton } from "../UI/AddToFavouritesButton";
import { ProductCardSkeleton } from "../ProductCardSkeleton";

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

  return isLoading ? (
    <ProductCardSkeleton className={classname} />
  ) : (
    <li
      ref={carouselItemRef}
      className={classNames(
        "col-span-full box-border h-full w-full rounded-lg border",
        "border-element-color transition-all dark:rounded-none dark:border-dark-surface1 dark:bg-dark-surface1 sm:col-span-6 md:col-span-4 xl:col-span-6",
        { [`${classname}`]: classname },
      )}
    >
      <div className="p-[32px] transition-all hover:shadow-sh2 dark:hover:shadow-zinc-700">
        <Link to={`../${item.category}/${item.itemId}`}>
          <div className=" relative mb-2 flex h-[196px] items-center justify-center">
            <img
              className="block h-full w-full object-contain transition-all hover:scale-[1.1]"
              src={image}
              alt="Product"
            />
          </div>
          <h3
            className="flex min-h-[58px] flex-col justify-end 
          text-[14px]/[21px] font-semibold transition-all dark:text-dark-white"
          >
            {name}
          </h3>
        </Link>
        <div className="justify-flex-start mb-2 flex items-center">
          <span className="text-main font-extrabold leading-8 transition-all dark:text-dark-white">
            ${price}
          </span>
          <span
            className="
          ml-2 text-main font-semibold leading-7
          text-secondary line-through transition-all dark:text-dark-secondary"
          >
            ${fullPrice}
          </span>
        </div>
        <div className="mb-2 border dark:border-dark-elements" />
        <div className="mb-2 flex flex-col gap-y-2 py-2">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-secondary transition-all dark:text-dark-secondary">
              Screen
            </div>
            <div className="text-xs font-bold transition-all dark:text-dark-white">
              {screen}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="
            text-xs font-bold text-secondary transition-all dark:text-dark-secondary"
            >
              Capacity
            </div>
            <div className="text-xs font-bold transition-all dark:text-dark-white">
              {capacity}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="
            text-xs font-bold text-secondary transition-all dark:text-dark-secondary"
            >
              RAM
            </div>
            <div className="text-xs font-bold transition-all dark:text-dark-white">
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
