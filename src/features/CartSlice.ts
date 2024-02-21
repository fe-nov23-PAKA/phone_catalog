import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/Item";

const initialState: Item[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (items, action: PayloadAction<Item>) => {
      items.push(action.payload);
    },
    replace: (items, action: PayloadAction<Item>) => {
      return items.filter((item) => item !== action.payload);
    },
    clear: () => [],
  },
});

export const { actions } = cartSlice;
export default cartSlice.reducer;
