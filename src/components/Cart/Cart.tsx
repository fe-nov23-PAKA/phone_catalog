import { CartItem } from "../CartItem";
import { ArrowLeft } from "../../icons/Arrow-Left";

export const Cart = () => {
  return (
    <div className="container pb-14 pt-[25px] sm:pb-16 sm:pt-10 xl:pb-20">
      <button
        type="button"
        className="mb-6 flex flex-row items-center gap-x-[10px] sm:mb-4"
      >
        <ArrowLeft />
        <span className="font-bold text-secondary">Back</span>
      </button>
      <h1 className="mb-8 text-left text-4xl font-extrabold leading-[48px] tracking-tighter sm:text-5xl/[56px]">
        Cart
      </h1>
      <div className="grid gap-x-4 md:grid-cols-3">
        <div className="mb-8 flex flex-col gap-y-4 md:col-span-2">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="flex max-h-[206px] flex-col items-center justify-center rounded-[16px] border border-element-color p-6">
          <h2 className="text-left text-3xl font-extrabold leading-10 tracking-tighter">
            $2657
          </h2>
          <div className=" text-center text-base text-secondary">
            Total for 3 items
          </div>
          <div className="my-6 w-full border" />
          <button
            className="h-12 w-full rounded-lg bg-accent text-element-color hover:shadow-sh1"
            type="button"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
