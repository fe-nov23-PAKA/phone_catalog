/* eslint-disable react/self-closing-comp */
import classNames from "classnames";
import { useEffect, useState } from "react";
import { Tick } from "../../icons/Tick";
import { actions as cartActions } from "../../features/CartSlice";
import { useAppDispatch } from "../../app/hooks";

export const CheckoutModal = () => {
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    const timerId = setTimeout(() => {
      dispatch(cartActions.clear());
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <div
        className={classNames(
          "fixed top-0 z-10 h-[100%] w-[100%] opacity-0 backdrop-brightness-[0.55] transition-opacity duration-[900ms]",
          { "opacity-100": isActive },
        )}
      ></div>
      <div
        className={classNames(
          "fixed left-[50%] top-[50%] z-20 h-[40%] w-[90%] translate-x-[-50%] translate-y-[-50%] rounded-3xl border border-secondary bg-white opacity-0 shadow-xl shadow-zinc-500 transition-opacity duration-[1100ms] dark:bg-dark-white sm:w-[65%] xl:w-[45%]",
          { "opacity-100": isActive },
        )}
      >
        <div className="fixed left-[50%] top-[50%] flex w-[80%] translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-y-4 text-center">
          <Tick fill="#27AE60" />

          <h1 className="text-2xl font-extrabold uppercase text-[#27AE60]">
            Success
          </h1>
          <div className="flex flex-col gap-y-1 xl:text-xl">
            <p className="text-lg font-semibold">Thank you for purchasing</p>
            <p>Shortly you will find a confirmation in your email.</p>
          </div>
        </div>
      </div>
    </>
  );
};
