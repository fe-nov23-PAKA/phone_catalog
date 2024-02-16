/* eslint-disable max-len */
import React from "react";
import img from "../../../public/img/phones/apple-iphone-11/black/00.webp";
import fav from "../../../public/img/icons/favourites.svg";

export const ProductCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-300 p-8 ring-opacity-40 max-w-sm">
      <div className="relative">
        <img className="w-full" src={img} alt="Product" />
      </div>
      <div className="p-8">
        <h3 className="text-lg font-medium mb-2">
          Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)
        </h3>
        <div className="flex items-center justify-flex-start mb-2">
          <span className="font-bold text-lg">$849</span>
          <span className="font-bold text-lg ml-2 line-through gray-price">
            $1199
          </span>
        </div>
        <div className="border mb-2" />
        <div className="mb-2">
          <div className="flex items-center justify-between">
            <div className="text-gray-elem">Screen</div>
            <div>6.5&#39;&#39; OLED</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-gray-elem">Capacity</div>
            <div>512 GB</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-gray-elem">RAM</div>
            <div>4 GB</div>
          </div>
        </div>

        <div className="flex items-center justify-evenly">
          <button
            className="bg-accent hover:secondary-accent text-white py-2 px-4 rounded"
            type="button"
          >
            Add to cart
          </button>
          <button
            type="button"
            className="border rounded-full w-10 h-10 flex items-center justify-center icons-color"
          >
            <img className="" src={fav} alt="botton-heart" />
          </button>
        </div>
      </div>
    </div>
  );
};
