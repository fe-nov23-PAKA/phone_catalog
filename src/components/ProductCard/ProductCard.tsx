/* eslint-disable operator-linebreak */
import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { Item } from "../../types/Item";
import { Favourites } from "../../icons/Favourites";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actions as favouritesActions } from "../../features/FavouritesSlice";
import { actions as cartActions } from "../../features/CartSlice";
import { FavouritesFilled } from "../../icons/FavouritesFilled";

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
  const {
    id,
    name,
    capacity,
    priceRegular,
    priceDiscount,
    screen,
    images,
    ram,
  } = item;

  const dispatch = useAppDispatch();

  const carouselItemRef = useRef<HTMLLIElement>(null);

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

  const favouriteItems = useAppSelector((state) => state.favourites);
  const favouriteItemsIds = favouriteItems.map((favItem) => favItem.id);

  const addToFavouritesHandler = (elem: Item) => {
    dispatch(favouritesActions.add(elem));
    localStorage.setItem(
      "favouriteItems",
      JSON.stringify([...favouriteItems, elem]),
    );
  };

  const removeFromFavouritesHandler = (elem: Item) => {
    dispatch(favouritesActions.replace(elem));
    const storageWithOutElem = favouriteItems.filter((el) => el.id !== elem.id);

    localStorage.setItem("favouriteItems", JSON.stringify(storageWithOutElem));
  };

  return (
    <li
      ref={carouselItemRef}
      className={classNames(
        "col-span-full box-border w-full rounded-lg border border-element-color transition-all hover:shadow-sh2 sm:col-span-6 md:col-span-4 xl:col-span-6",
        { [`${classname}`]: classname },
      )}
    >
      <div className="p-[32px] ">
        <div className="mb-2 flex h-[196px] items-center justify-center">
          <img
            className="block max-w-36 self-center"
            src={images[0]}
            alt="Product"
          />
        </div>
        <h3
          className="flex min-h-[58px] flex-col 
          justify-end  font-semibold"
        >
          {name}
        </h3>
        <div className="justify-flex-start mb-2 flex items-center">
          <span className="text-main font-extrabold leading-8">
            ${priceDiscount}
          </span>
          <span
            className="
          ml-2 text-main font-semibold
          leading-7 text-secondary line-through"
          >
            ${priceRegular}
          </span>
        </div>
        <div className="mb-2 border" />
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="text-gray-elem text-xs text-secondary">Screen</div>
            <div className="text-xs font-semibold">{screen}</div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="
            text-gray-elem text-xs text-secondary"
            >
              Capacity
            </div>
            <div className="text-xs font-semibold">{capacity}</div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="
            text-gray-elem text-xs text-secondary"
            >
              RAM
            </div>
            <div className="text-xs font-semibold">{ram}</div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-x-2">
          <button
            className="
            hover:secondary-accent all w-4/5
            rounded-lg bg-accent py-2 font-semibold text-white
              transition-all hover:shadow-sh1"
            type="button"
            onClick={() => dispatch(cartActions.add(item))}
          >
            Add to cart
          </button>
          {favouriteItemsIds.includes(id) ? (
            <button
              type="button"
              onClick={() => {
                dispatch(cartActions.add(item));
                removeFromFavouritesHandler(item);
              }}
              className="
            flex h-10 w-10 items-center 
            justify-center rounded-full
            border border-icons-color transition-all hover:border-primary"
            >
              <FavouritesFilled fill="#F447AF" />
            </button>
          ) : (
            <button
              type="button"
              className="
            flex h-10 w-10 items-center 
            justify-center rounded-full
            border border-icons-color transition-all hover:border-primary"
              onClick={() => addToFavouritesHandler(item)}
            >
              <Favourites />
            </button>
          )}
        </div>
      </div>
    </li>
  );
};
