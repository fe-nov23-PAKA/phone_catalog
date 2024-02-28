import classNames from "classnames";
import { useEffect, useState } from "react";
import AOS from "aos";
import confetti from "canvas-confetti";
import { CartItem } from "../CartItem";
import { useAppSelector } from "../../app/hooks";
import { InitialState } from "../../types/InitialState";
import { CheckoutModal } from "../CheckoutModal";
import { BackButton } from "../UI/BackButton";
import { Breadcrumbs } from "../UI/Breadcrumbs";
import imgEmptyCart from "../../assets/img/empty-cart-1.png";
import { CartItemSkeleton } from "../CartItemSkeleton";
import { CartCheckoutSkeleton } from "../CartCheckoutSkeleton";
import "aos/dist/aos.css";

export const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems: InitialState[] = useAppSelector((state) => state.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );
  const [isLoading, setIsLoading] = useState(true);

  const allItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    AOS.init();
    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <div className="container px-4 pb-14 pt-6 sm:px-6 sm:pb-16 xl:px-8 xl:pb-20">
        <Breadcrumbs />
        <BackButton />
        <h1
          data-aos="fade-right"
          className="mb-8 text-left text-[32px]/[41px] font-extrabold tracking-[-0.01em] dark:text-dark-white sm:text-[48px]/[56px]"
        >
          Cart
        </h1>
        <div className="grid gap-x-4 md:grid-cols-3">
          <div className="mb-8 flex flex-col gap-y-4 md:col-span-2">
            {cartItems.map((item) =>
              isLoading ? (
                <CartItemSkeleton />
              ) : (
                <CartItem item={item} key={item.product.id} />
              ),
            )}
          </div>
          {isLoading ? (
            <CartCheckoutSkeleton />
          ) : (
            <div
              data-aos="fade-left"
              className="flex max-h-[190px] flex-col items-center justify-center rounded-[16px] border border-element-color p-6 dark:rounded-none dark:border-dark-elements"
            >
              <div className="flex w-full flex-col justify-center gap-y-4 text-center">
                <div className="border-b border-element-color pb-4 dark:border-dark-elements">
                  <h2 className="text-[32px]/[41px] font-extrabold tracking-[-0.01em] dark:text-dark-white">
                    ${totalPrice}
                  </h2>
                  <div className="text-center text-sm/[21px] font-semibold text-secondary">
                    {`Total for ${allItemsCount === 1 ? `${allItemsCount} item` : `${allItemsCount} items`}`}
                  </div>
                </div>
                <button
                  className={classNames(
                    "min-h-12 w-full rounded-lg bg-accent text-[14px]/[21px] font-semibold text-white transition-all hover:shadow-sh1 dark:rounded-none dark:bg-dark-accent dark:text-dark-white dark:hover:bg-dark-hover dark:hover:shadow-zinc-700",
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
          )}
        </div>
      </div>
      {isModalOpen && <CheckoutModal />}
    </>
  );
};
