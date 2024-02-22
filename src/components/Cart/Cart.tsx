import { useState } from "react";
import { CartItem } from "../CartItem";
import { ArrowLeft } from "../../icons/Arrow-Left";
import { useAppSelector } from "../../app/hooks";

export const Cart = () => {
  const cartForPurchase = useAppSelector((state) => state.cart);
  const initialPrice = cartForPurchase.reduce(
    (acc, price) => acc + price.priceDiscount,
    0,
  );

  const [totalItems, setTotalItems] = useState(cartForPurchase.length);
  const [totalPrice, setTotalPrice] = useState(initialPrice);

  const handlePriceUpdate = (itemPrice: number) => {
    setTotalPrice((prevTotal) => prevTotal + itemPrice);
  };

  const handleItemCountUpdate = (itemCount: number) => {
    setTotalItems((prevItemCount) => prevItemCount + itemCount);
  };

  return (
    <div className="container mb-14 mt-6 px-4 sm:mt-10 sm:px-6 xl:px-8">
      <button type="button" className="mb-6 flex flex-row items-center">
        <ArrowLeft />
        <span className="font-bold text-secondary">Back</span>
      </button>
      <h1 className="leading-14 mb-8 text-left text-4xl font-extrabold tracking-tighter sm:mb-4 sm:text-5xl/[56px]">
        Cart
      </h1>
      {cartForPurchase.length > 0 ? (
        <div className="grid gap-x-4 md:grid-cols-3">
          <div className="mb-8 flex flex-col gap-y-4 md:col-span-2">
            {cartForPurchase.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handlePriceUpdate={handlePriceUpdate}
                handleItemCountUpdate={handleItemCountUpdate}
              />
            ))}
            {/* <CartItem />
          <CartItem />
          <CartItem /> */}
          </div>
          <div className="flex max-h-[190px] flex-col items-center justify-center rounded-[16px] border border-element-color p-6">
            <div className="flex w-full flex-col justify-center gap-y-4 text-center">
              <div className="border-b border-element-color pb-4">
                <h2 className="text-[32px]/[41px] font-extrabold tracking-[-0.01em]">
                  ${totalPrice}
                </h2>
                <div className="text-center text-sm/[21px] font-semibold text-secondary">
                  {`Total for ${totalItems === 1 ? `${totalItems} item` : `${totalItems} items`}`}
                </div>
              </div>
              <button
                className="min-h-12 w-full rounded-lg bg-accent text-[14px]/[21px] font-semibold text-white hover:shadow-sh1"
                type="button"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Paka</p>
      )}
    </div>
  );
};
