import React from "react";
import img from "../../../public/img/phones/apple-iphone-11/black/00.webp";
import fav from "../../../public/img/icons/favourites.svg";

export const ProductCard: React.FC = () => {
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
          <img className="w-44 block self-center" src={img} alt="Product" />
        </div>
        <h3 className="pt-4 font-semibold text-small">
          Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
        </h3>
        <div className="flex items-center justify-flex-start mb-2">
          <span className="font-extrabold text-lg text-main leading-8">
            $849
          </span>
          <span
            className="
          font-semibold text-lg ml-2 line-through
          text-secondary-primary text-main leading-7"
          >
            $1199
          </span>
        </div>
        <div className="border mb-2" />
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-gray-elem text-secondary-primary">Screen</div>
            <div className="font-semibold">6.5&#39;&#39; OLED</div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="
            text-gray-elem text-secondary-primary"
            >
              Capacity
            </div>
            <div className="font-semibold">512 GB</div>
          </div>
          <div className="flex items-center justify-between">
            <div
              className="
            text-gray-elem mb-2 text-secondary-primary"
            >
              RAM
            </div>
            <div className="font-semibold">4 GB</div>
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
