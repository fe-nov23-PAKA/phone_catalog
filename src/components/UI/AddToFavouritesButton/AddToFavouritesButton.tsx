import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { actions as favouritesActions } from "../../../features/FavouritesSlice";
import { Favourites } from "../../../icons/Favourites";
import { FavouritesFilled } from "../../../icons/FavouritesFilled";
import { Item } from "../../../types/Item";

interface Props {
  item: Item;
}

export const AddToFavouritesButton: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  const favouriteItems = useAppSelector((state) => state.favourites);
  const favouriteItemsIds = favouriteItems.map((favItem) => favItem.itemId);

  return (
    <button
      type="button"
      className="
            dark:bg-dark-surface2 dark:border-dark-surface2 dark:hover:bg-dark-icons flex h-10 w-10
            items-center justify-center
            rounded-full border border-icons-color transition-all hover:border-primary"
      onClick={() =>
        favouriteItemsIds.includes(item.itemId)
          ? dispatch(favouritesActions.replace(item))
          : dispatch(favouritesActions.add(item))
      }
    >
      {favouriteItemsIds.includes(item.itemId) ? (
        <FavouritesFilled
          fill={
            localStorage.getItem("theme") === "dark" ? "#EB5757" : "#F447AF"
          }
        />
      ) : (
        <Favourites
          fill={localStorage.getItem("theme") === "dark" ? "#F1F2F9" : ""}
        />
      )}
    </button>
  );
};
