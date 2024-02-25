import { Plus } from "../../icons/Plus";
import { Minus } from "../../icons/Minus";
import { Close } from "../../icons/Close";
import { InitialState } from "../../types/InitialState";
import { useAppDispatch } from "../../app/hooks";
import { actions as cartActions } from "../../features/CartSlice";

interface Props {
  item: InitialState;
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const { quantity, product } = item;
  const { name, price, image } = product;

  const dispatch = useAppDispatch();

  return (
    <div className="box-border flex flex-col justify-between gap-4 rounded-[16px] border border-solid border-element-color p-4 sm:flex-row sm:p-6">
      <div className="flex flex-row items-center gap-4">
        <button
          type="button"
          onClick={() => dispatch(cartActions.replace(product))}
        >
          <Close fill="#b4bdc3" />
        </button>
        <div className="flex min-h-[80px] min-w-[80px] items-center justify-center">
          <img src={image} alt="phone" className="h-full max-h-[66px]" />
        </div>
        <div className="text-sm/[21px] font-semibold">{name}</div>
      </div>
      <div className="flex flex-row items-center justify-between gap-x-[53px]">
        <div className="flex flex-row items-center gap-3">
          <button
            type="button"
            className="disabled:hover: box-content flex min-h-8 min-w-8 
            items-center justify-center
            rounded-full border border-icons-color hover:border-primary disabled:border-element-color"
            onClick={() => dispatch(cartActions.decrease(product))}
            disabled={quantity === 1}
          >
            <Minus fill={quantity === 1 ? "#E2E6E9" : ""} />
          </button>
          <div className="flex min-w-[17px] justify-center text-sm/[21px] font-semibold">
            {quantity}
          </div>
          <button
            type="button"
            className="box-content flex min-h-8 min-w-8 items-center justify-center rounded-full border border-icons-color hover:border-primary disabled:bg-red"
            onClick={() => dispatch(cartActions.increase(product))}
          >
            <Plus />
          </button>
        </div>
        <div className="max-w-[80px] text-[22px]/[31px] font-extrabold">{`$${price * quantity}`}</div>
      </div>
    </div>
  );
};
