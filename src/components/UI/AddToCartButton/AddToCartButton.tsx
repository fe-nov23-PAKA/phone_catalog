import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { actions as cartActions } from "../../../features/CartSlice";
import { Item } from "../../../types/Item";

interface Props {
  item: Item;
}

export const AddToCartButton: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart);
  const cartItemsIds = cartItems.map((cartItem) => cartItem.id);

  return (
    <button
      disabled={cartItemsIds.includes(item.id)}
      className={classNames(
        "all w-4/5 rounded-lg border dark:rounded-none",
        " py-2 font-semibold ",
        "border-accent bg-white text-accent transition-all dark:border-dark-surface2 dark:bg-dark-surface2 dark:text-dark-white ",
        {
          "!bg-accent !text-white hover:shadow-sh1 dark:!bg-dark-accent dark:!text-dark-white dark:hover:!bg-dark-hover dark:hover:!shadow-sh1 dark:hover:!shadow-zinc-700":
            !cartItemsIds.includes(item.id),
        },
      )}
      type="button"
      onClick={() => {
        dispatch(cartActions.add(item));
      }}
    >
      {cartItemsIds.includes(item.id) ? "Added to cart" : "Add to cart"}
    </button>
  );
};
