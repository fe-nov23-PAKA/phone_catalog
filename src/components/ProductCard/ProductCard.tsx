import React from "react";
<<<<<<< HEAD
import { Phone } from "../../types/Phone";
import { Favorites } from "../../icons/Favourites";
import { AboutSection } from "../UI/AboutSection";
=======
import classNames from "classnames";
import { Item } from "../../types/Item";
import { Favourites } from "../../icons/Favourites";
>>>>>>> 74fdbc3521c5bdbfbda3f86bdcf9411fdc985464

type Props = {
  phone: Item;
  classnames?: string;
};

<<<<<<< HEAD
export const ProductCard: React.FC<Props> = ({ phone }) => {
  const {
    name,
    capacity,
    priceRegular,
    priceDiscount,
    screen,
    images,
    ram,
    description,
  } = phone;
=======
export const ProductCard: React.FC<Props> = ({ phone, classnames }) => {
  const { name, capacity, priceRegular, priceDiscount, screen, images, ram } =
    phone;
>>>>>>> 74fdbc3521c5bdbfbda3f86bdcf9411fdc985464

  return (
    <li
      className={classNames(
        "hover:shadow-sh2 col-span-full w-full rounded-lg border border-element-color sm:col-span-6 md:col-span-4 xl:col-span-6",
        { [`${classnames}`]: classnames },
      )}
    >
      <a href="/">
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
              <div className="text-gray-elem text-xs text-secondary">
                Screen
              </div>
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
              hover:shadow-sh1"
              type="button"
            >
              Add to cart
            </button>
            <button
              type="button"
              className="
            flex h-10 w-10 items-center 
            justify-center rounded-full
            border border-icons-color hover:border-primary"
            >
              <Favourites />
            </button>
          </div>
        </div>
      </a>
    </li>
  );
};
