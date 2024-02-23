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
    <div className="flex flex-col gap-4 rounded-[16px] border border-solid border-element-color p-6 sm:flex-row">
      <div className="flex flex-row items-center gap-[24px]">
        <button
          onClick={() => dispatch(cartActions.replace(product))}
          type="button"
        >
          <Close fill="#b4bdc3" />
        </button>
        <div className="min-h-[80px] min-w-[55px]">
          <img src={image} alt="phone" className="h-[66px] w-[66px]" />
        </div>
        <div className="">{name}</div>
      </div>
      <div className="flex flex-row items-center justify-between gap-[24px]">
        <div className="flex flex-row items-center gap-3">
          <button
            onClick={() => dispatch(cartActions.decrease(product))}
            type="button"
            className="
            flex h-10 w-10 items-center 
            justify-center rounded-full
            border border-icons-color transition-all hover:border-primary"
          >
            <Minus />
          </button>
          <div>{quantity}</div>
          <button
            onClick={() => dispatch(cartActions.increase(product))}
            type="button"
            className="
            flex h-10 w-10 items-center
            justify-center rounded-full
            border border-icons-color transition-all hover:border-primary"
          >
            <Plus />
          </button>
        </div>
        <div className="font-extrabold leading-8">{`$${price * quantity}`}</div>
      </div>
    </div>
  );
};
