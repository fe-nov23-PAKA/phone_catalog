import { CartItem } from "../CartItem";
import { ArrowLeft } from "../../icons/Arrow-Left";
import { useAppSelector } from "../../app/hooks";
import { InitialState } from "../../types/InitialState";

export const Cart = () => {
  const cartItems: InitialState[] = useAppSelector((state) => state.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  const allItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="container mb-14 px-4 pt-6 sm:px-6 sm:pt-10 xl:px-8">
      <button type="button" className="mb-6 flex flex-row items-center">
        <ArrowLeft />
        <span className="font-bold text-secondary">Back</span>
      </button>
      <h1 className="mb-8 text-left text-4xl font-extrabold leading-[48px] tracking-tighter sm:text-5xl/[56px]">
        Cart
      </h1>
      <div className="grid gap-x-4 md:grid-cols-3">
        <div className="mb-8 flex flex-col gap-y-4 md:col-span-2">
          {cartItems.map((item) => (
            <CartItem item={item} key={item.product.id} />
          ))}
        </div>
        <div className="flex max-h-[190px] flex-col items-center justify-center rounded-[16px] border border-element-color p-6">
          <div className="flex w-full flex-col justify-center gap-y-4 text-center">
            <div className="border-b border-element-color pb-4">
              <h2 className="text-[32px]/[41px] font-extrabold tracking-[-0.01em]">
                ${totalPrice}
              </h2>
              <div className="text-center text-sm/[21px] font-semibold text-secondary">
                {`Total for ${allItemsCount === 1 ? `${allItemsCount} item` : `${allItemsCount} items`}`}
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
    </div>
  );
};
