/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Item } from "../types/Item";
import { getData } from "../utils/getData";

interface InitialState {
  items: Item[];
  loading: boolean;
  error: string;
}

const initialState: InitialState = {
  items: [],
  loading: false,
  error: "",
};

const ItemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(init.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = "error";
    });
  },
});

export default ItemsSlice.reducer;

export const init = createAsyncThunk("items/fetch", (option: string) => {
  return getData(option);
});
