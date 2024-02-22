import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/Item";

const isFavouritesInLocalStorage: string | null =
  localStorage.getItem("favouriteItems");

const favouritesInLocalStorage = isFavouritesInLocalStorage
  ? JSON.parse(isFavouritesInLocalStorage)
  : [];

const initialState: Item[] = favouritesInLocalStorage;

export const cartSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    add: (items, action: PayloadAction<Item>) => {
      items.push(action.payload);
    },
    replace: (items, action: PayloadAction<Item>) => {
      return items.filter((item) => item.id !== action.payload.id);
    },
    clear: () => [],
  },
});

export const { actions } = cartSlice;
export default cartSlice.reducer;
