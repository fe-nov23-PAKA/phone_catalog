import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
import favouritesReducer from "../features/FavouritesSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourites: favouritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
