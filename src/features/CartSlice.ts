import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/Item";

interface InitialState {
  id: number;
  quantity: number;
  product: Item;
}

const initialState: InitialState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Item>) => {
      state.push({
        id: action.payload.id,
        quantity: 1,
        product: action.payload,
      });
    },
    replace: (state, action: PayloadAction<Item>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    increase: (state, action: PayloadAction<Item>) => {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    },
    decrease: (state, action: PayloadAction<Item>) => {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    },
    clear: () => [],
  },
});

export const { actions } = cartSlice;
export default cartSlice.reducer;
