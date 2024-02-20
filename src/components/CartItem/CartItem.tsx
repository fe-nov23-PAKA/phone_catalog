import phone from "../../assets/img/category-phones.png";
import { Plus } from "../../icons/Plus";
import { Minus } from "../../icons/Minus";
import { Close } from "../../icons/Close";

export const CartItem = () => {
  return (
    <div className="flex flex-col gap-4 rounded-[16px] border border-solid border-element-color p-6 sm:flex-row">
      <div className="flex flex-row items-center gap-[24px]">
        <button type="button">
          <Close fill="#b4bdc3" />
        </button>
        <div className="min-h-[80px] min-w-[55px]">
          <img src={phone} alt="phone" className="h-[66px] w-[66px]" />
        </div>
        <div className="">Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</div>
      </div>
      <div className="flex flex-row items-center justify-between gap-[24px]">
        <div className="flex flex-row items-center gap-3">
          <button
            type="button"
            className="
            flex h-10 w-10 items-center 
            justify-center rounded-full
            border border-icons-color hover:border-primary"
          >
            <Minus />
          </button>
          <div>1</div>
          <button
            type="button"
            className="
            flex h-10 w-10 items-center
            justify-center rounded-full
            border border-icons-color hover:border-primary"
          >
            <Plus />
          </button>
        </div>
        <div className="font-extrabold leading-8">$1099</div>
      </div>
    </div>
  );
};
