/* eslint-disable no-nested-ternary */
import classNames from "classnames";
import { Plus } from "../../icons/Plus";
import { Minus } from "../../icons/Minus";
import { Close } from "../../icons/Close";
import { InitialState } from "../../types/InitialState";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actions as cartActions } from "../../features/CartSlice";

interface Props {
  item: InitialState;
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const { quantity, product } = item;
  const { name, price, image } = product;
  const theme = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  return (
    <div className="box-border flex flex-col justify-between gap-4 rounded-[16px] border border-solid border-element-color p-4 dark:rounded-none dark:border-dark-surface1 dark:bg-dark-surface1 sm:flex-row sm:p-6">
      <div className="flex flex-row items-center gap-4">
        <button
          type="button"
          onClick={() => dispatch(cartActions.replace(product))}
        >
          <Close fill={theme === "dark" ? "#4A4D58" : "#b4bdc3"} />
        </button>
        <div className="flex min-h-[80px] min-w-[80px] items-center justify-center">
          <img src={image} alt="phone" className="h-full max-h-[66px]" />
        </div>
        <div className="text-sm/[21px] font-semibold dark:text-dark-white">
          {name}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <button
            type="button"
            className={classNames(
              "box-content flex min-h-8 min-w-8 items-center justify-center rounded-full border border-icons-color transition-all hover:border-primary disabled:border-element-color dark:rounded-none dark:border-dark-surface2 dark:bg-dark-surface2",
              {
                "dark:border-dark-elements dark:bg-dark-black": quantity === 1,
              },
              {
                "dark:hover:border-dark-icons dark:hover:bg-dark-icons":
                  quantity !== 1,
              },
            )}
            onClick={() => dispatch(cartActions.decrease(product))}
            disabled={quantity === 1}
          >
            <Minus
              fill={
                theme === "dark" && quantity === 1
                  ? "#4A4D58"
                  : quantity === 1
                    ? "#E2E6E9"
                    : theme === "dark"
                      ? quantity !== 1
                        ? "#F1F2F9"
                        : ""
                      : ""
              }
            />
          </button>
          <div className="flex min-w-[17px] justify-center text-sm/[21px] font-semibold dark:text-dark-white">
            {quantity}
          </div>
          <button
            type="button"
            className="box-content flex min-h-8 min-w-8 items-center justify-center rounded-full border border-icons-color transition-all hover:border-primary disabled:border-element-color dark:rounded-none dark:border-dark-surface2 dark:bg-dark-surface2 dark:hover:border-dark-icons dark:hover:bg-dark-icons"
            onClick={() => dispatch(cartActions.increase(product))}
          >
            <Plus fill={theme === "dark" ? "#F1F2F9" : ""} />
          </button>
        </div>
        <div className="min-w-[100px] text-right text-[22px]/[31px] font-extrabold dark:text-dark-white">{`$${price * quantity}`}</div>
      </div>
    </div>
  );
};
