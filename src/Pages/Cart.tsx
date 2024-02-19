import { CartItem } from "../components/CartItem";
import ArroyLeft from "../assets/img/icons/arrow-left-black.svg";

export const Cart = () => {
  return (
    <div className="cart container">
      <button type="button" className="mb-6 flex flex-row items-center pr-1">
        <img className="h-3 w-4" src={ArroyLeft} alt="ArroyBack" />
        <span className="font-bold text-secondary">Back</span>
      </button>
      <h1 className="leading-14 mb-6 text-left text-4xl font-extrabold tracking-tighter">
        Cart
      </h1>
      <div className="flex flex-col sm:flex-row">
        <div className="mr-4 flex flex-col gap-y-4">
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
          <div className="my-6 w-80 border" />
          <button
            className="h-12 w-80 rounded-lg bg-accent text-element-color hover:shadow-sh1"
            type="button"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
