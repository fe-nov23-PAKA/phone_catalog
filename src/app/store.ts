import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
import itemsReducer from "../features/ItemsSlice";
import favouritesReducer from "../features/FavouritesSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourites: favouritesReducer,
    items: itemsReducer,
  },
});

const saveCartToLocalStorage = () => {
  const state = store.getState().cart;

  localStorage.setItem("cartList", JSON.stringify(state));
};

store.subscribe(() => {
  saveCartToLocalStorage();
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
