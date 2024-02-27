import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
import itemsReducer from "../features/ItemsSlice";
import themeReducer from "../features/ThemeSlice";
import favouritesReducer from "../features/FavouritesSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourites: favouritesReducer,
    items: itemsReducer,
    theme: themeReducer,
  },
});

const saveCartToLocalStorage = () => {
  const state = store.getState().cart;

  localStorage.setItem("cartList", JSON.stringify(state));
};

const saveFavouritesToLocalStorage = () => {
  const state = store.getState().favourites;

  localStorage.setItem("favouritesList", JSON.stringify(state));
};

const saveThemeToLocalStorage = () => {
  const state = store.getState().theme;

  localStorage.setItem("theme", JSON.stringify(state));
};

store.subscribe(() => {
  saveCartToLocalStorage();
  saveFavouritesToLocalStorage();
  saveThemeToLocalStorage();
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
