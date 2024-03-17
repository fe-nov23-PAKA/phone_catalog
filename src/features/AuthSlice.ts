import { JwtPayload, jwtDecode } from 'jwt-decode';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');
let initialState: JwtPayload | null = null;

if (token) {
  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  if (decodedToken.exp && decodedToken.exp > currentTime) {
    initialState = decodedToken;
  } else {
    localStorage.removeItem('token');
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<JwtPayload>) => action.payload,
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
