import img from "../../assets/img/icons/close.svg";
import phone from "../../assets/img/category-phones.png";
import minus from "../../assets/img/icons/minus.svg";
import plus from "../../assets/img/icons/plus.svg";

export const CartItem = () => {
  return (
    <div className="flex max-w-[752px] flex-col gap-4 rounded-[16px] border border-solid border-element-color p-6 sm:flex-row sm:gap-4">
      <div className="flex flex-row items-center gap-[24px]">
        <button type="button">
          <img src={img} alt="close" className="h-4 w-4" />
        </button>
        <div className="left-[64px] top-[24px]">
          <img src={phone} alt="phone" className="h-[66px] w-[66px]" />
        </div>
        <div className="">Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</div>
      </div>
      <div className="flex flex-row items-center justify-between  gap-[24px]">
        <div className="flex flex-row items-center gap-3">
          <button
            type="button"
            className="
            flex h-10 w-10 items-center 
            justify-center rounded-full
            border border-icons-color hover:border-primary"
          >
            <img className="" src={minus} alt="minus" />
          </button>
          <div>1</div>
          <button
            type="button"
            className="
            flex h-10 w-10 items-center
            justify-center rounded-full
            border border-icons-color hover:border-primary"
          >
            <img className="" src={plus} alt="plus" />
          </button>
        </div>
        <div className="">$1099</div>
      </div>
    </div>
  );
};
