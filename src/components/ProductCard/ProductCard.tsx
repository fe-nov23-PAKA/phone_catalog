import React from "react";
import img from "../../../public/img/phones/apple-iphone-11/black/00.webp";
import fav from "../../../public/img/icons/favourites.svg";
import { Phone } from "../../types/Phone";

interface Props {
  phone: Phone;
}

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const { name, capacity, priceRegular, priceDiscount, screen, images, ram } = phone;

  return (
    <div
      className="
     rounded-lg border flex-col
     border-gray-300 max-w-72
     font-mont
     "
    >
      <div className="p-8 space-y-2">
        <div className="flex justify-center items-center">
          <img
            className="w-36 block self-center"
            src={images[0]}
            alt="Product"
          />
        </div>
        <h3 className="pt-4 font-semibold text-small">{name}</h3>
        <div className="flex items-center justify-flex-start mb-2">
          <span className="font-extrabold text-main leading-8">
            ${priceRegular}
          </span>
          <span
            className="
          font-semibold ml-2 line-through
          text-secondary text-main leading-7"
          >
            ${priceDiscount}
          </span>
        </div>
        <div className="border mb-2" />
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-gray-elem text-secondary text-xs">Screen</div>
            <div className="font-semibold text-xs">{screen}</div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="
            text-gray-elem text-secondary text-xs"
            >
              Capacity
            </div>
            <div className="font-semibold text-xs">{capacity}</div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="
            text-gray-elem mb-2 text-secondary text-xs"
            >
              RAM
            </div>
            <div className="font-semibold text-xs">{ram}</div>
          </div>
        </div>

        <div className="gap-x-2 flex items-center justify-between">
          <button
            className="
            bg-accent hover:secondary-accent text-small
            text-white py-2 rounded-lg w-4/5 font-semibold"
            type="button"
          >
            Add to cart
          </button>
          <button
            type="button"
            className="
            border rounded-full w-10 h-10
            flex items-center justify-center"
          >
            <img className="" src={fav} alt="botton-heart" />
          </button>
        </div>
      </div>
    </div>
  );
};
