import { createSlice } from '@reduxjs/toolkit';

const isThemeInLocalStorage: string = localStorage.getItem('theme') || 'light';

const initialState: string = isThemeInLocalStorage;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state: string) => {
      return state === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { actions } = themeSlice;
export default themeSlice.reducer;
