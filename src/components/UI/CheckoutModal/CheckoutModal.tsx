import { useEffect } from "react";
import { Tick } from "../../../icons/Tick";
import { useAppDispatch } from "../../../app/hooks";
import { actions as cartActions } from "../../../features/CartSlice";

export const CheckoutModal = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(cartActions.clear());
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="absolute left-[50%] top-[50%] w-[500px] translate-x-[-50%] translate-y-[-50%] bg-slate-500">
      <div className="flex flex-col items-center">
        <h1>Thank you</h1>
        <p>
          <span className="text-red">for choosing</span>
          <span> NiceGadjets</span>
        </p>
        <Tick fill="#C6F7B1" />
        <p>Our managers will contact you</p>
      </div>
    </div>
  );
};
