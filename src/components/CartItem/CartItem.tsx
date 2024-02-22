import React, { useState } from "react";
import classNames from "classnames";
import { Plus } from "../../icons/Plus";
import { Minus } from "../../icons/Minus";
import { Close } from "../../icons/Close";
import { Item } from "../../types/Item";
import { actions as cartActions } from "../../features/CartSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

type Props = {
  item: Item;
  handlePriceUpdate: (itemPrice: number) => void;
  handleItemCountUpdate: (itemCount: number) => void;
};

export const CartItem: React.FC<Props> = ({
  item,
  handlePriceUpdate,
  handleItemCountUpdate,
}) => {
  const [itemCount, setItemCount] = useState(1);
  const cartItems = useAppSelector((state) => state.cart);

  const handleItemCountChange = (increment: number) => {
    const newItemCount = itemCount + increment;

    if (newItemCount >= 1) {
      setItemCount(newItemCount);

      handlePriceUpdate(increment * item.priceDiscount);
      handleItemCountUpdate(increment);
    }
  };

  const dispatch = useAppDispatch();

  const removeFromCartHandler = (elem: Item) => {
    dispatch(cartActions.replace(elem));
    const storageWithOutElem = cartItems.filter(
      (el: Item) => el.id !== elem.id,
    );

    localStorage.setItem("cartItems", JSON.stringify(storageWithOutElem));
  };

  return (
    <div className="box-border flex flex-col justify-between gap-4 rounded-[16px] border border-solid border-element-color p-4 sm:flex-row sm:p-6">
      <div className="flex flex-row items-center gap-4">
        <button type="button" onClick={() => removeFromCartHandler(item)}>
          <Close fill="#b4bdc3" />
        </button>
        <div className="flex min-h-[80px] min-w-[80px] items-center justify-center">
          <img
            src={item.images[0]}
            alt="phone"
            className="h-full max-h-[66px]"
          />
        </div>
        <div className="text-sm/[21px] font-semibold">{item.name}</div>
      </div>
      <div className="flex flex-row items-center justify-between gap-x-[53px]">
        <div className="flex flex-row items-center gap-3">
          <button
            type="button"
            className="
            disabled:hover: box-content flex min-h-8 min-w-8 
            items-center justify-center
            rounded-full border border-icons-color hover:border-primary disabled:border-element-color"
            onClick={() => handleItemCountChange(-1)}
            disabled={itemCount === 1}
          >
            <Minus fill={itemCount === 1 ? "#E2E6E9" : ""} />
          </button>
          <div className="flex min-w-[17px] justify-center text-sm/[21px] font-semibold">
            {itemCount < 1 ? 1 : itemCount}
          </div>
          <button
            type="button"
            className={classNames(
              "box-content flex min-h-8 min-w-8 items-center justify-center rounded-full border border-icons-color hover:border-primary disabled:bg-red",
            )}
            onClick={() => handleItemCountChange(1)}
          >
            <Plus />
          </button>
        </div>
        <div className="max-w-[80px] text-[22px]/[31px] font-extrabold">{`$${itemCount * item.priceDiscount}`}</div>
      </div>
    </div>
  );
};
