import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/Item";

const isFavouritesInLocalStorage: string | null =
  localStorage.getItem("favouritesList");

const favouritesInLocalStorage = isFavouritesInLocalStorage
  ? JSON.parse(isFavouritesInLocalStorage)
  : [];

const initialState: Item[] = favouritesInLocalStorage;

export const favouritesSlice = createSlice({
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

export const { actions } = favouritesSlice;
export default favouritesSlice.reducer;
