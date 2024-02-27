import classNames from "classnames";
import { useState } from "react";
import confetti from "canvas-confetti";
import { CartItem } from "../CartItem";
import { ArrowLeft } from "../../icons/Arrow-Left";
import { useAppSelector } from "../../app/hooks";
import { InitialState } from "../../types/InitialState";
import { CheckoutModal } from "../CheckoutModal";
import imgEmptyCart from "../../assets/img/empty-cart-1.png";

export const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems: InitialState[] = useAppSelector((state) => state.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  const allItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className="container px-4 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-10 xl:px-8 xl:pb-20">
        <button type="button" className="flex flex-row items-center pb-6">
          <ArrowLeft fill="#F1F2F9" />
          <span className="dark:text-dark-secondary dark:hover:text-dark-white font-bold text-secondary transition-all">
            Back
          </span>
        </button>
        <h1 className="dark:text-dark-white mb-8 text-left text-[32px]/[41px] font-extrabold tracking-[-0.01em] sm:text-[48px]/[56px]">
          Cart
        </h1>
        {cartItems.length ? (
          <div className="grid gap-x-4 md:grid-cols-3">
            <div className="mb-8 flex flex-col gap-y-4 md:col-span-2">
              {cartItems.map((item) => (
                <CartItem item={item} key={item.product.id} />
              ))}
            </div>
            <div className="dark:border-dark-elements flex max-h-[190px] flex-col items-center justify-center rounded-[16px] border border-element-color p-6">
              <div className="flex w-full flex-col justify-center gap-y-4 text-center">
                <div className="dark:border-dark-elements border-b border-element-color pb-4">
                  <h2 className="dark:text-dark-white text-[32px]/[41px] font-extrabold tracking-[-0.01em]">
                    ${totalPrice}
                  </h2>
                  <div className="text-center text-sm/[21px] font-semibold text-secondary">
                    {`Total for ${allItemsCount === 1 ? `${allItemsCount} item` : `${allItemsCount} items`}`}
                  </div>
                </div>
                <button
                  className={classNames(
                    "dark:bg-dark-accent dark:text-dark-white dark:hover:bg-dark-hover min-h-12 w-full rounded-lg bg-accent text-[14px]/[21px] font-semibold text-white transition-all hover:shadow-sh1 dark:rounded-none dark:hover:shadow-zinc-700",
                    { "bg-icons-color hover:shadow-none": !cartItems.length },
                  )}
                  type="button"
                  disabled={!cartItems.length}
                  onClick={() => {
                    setIsModalOpen(true);
                    confetti({
                      particleCount: 100,
                      spread: 70,
                    });
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img
              className="ml-auto mr-auto"
              src={imgEmptyCart}
              alt="Empty cart"
            />
          </div>
        )}
      </div>
      {isModalOpen && <CheckoutModal />}
    </>
  );
};
