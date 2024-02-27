import { createSlice } from "@reduxjs/toolkit";

const isThemeInLocalStorage: string = localStorage.getItem("theme") || "light";

const initialState: string = isThemeInLocalStorage;

export const favouritesSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: string) => {
      return state === "dark" ? "light" : "dark";
    },
  },
});

export const { actions } = favouritesSlice;
export default favouritesSlice.reducer;
