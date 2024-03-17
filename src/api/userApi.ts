import { jwtDecode } from 'jwt-decode';
import { authIstance } from './http';
import { REACT_APP_API_URL } from '../variables';

export const signIn = async (name: string, email: string, password: string) => {
  const { data } = await authIstance.post('api/sign-in', {
    name,
    email,
    password,
    role: 'USER',
  });

  localStorage.setItem('token', data.token);

  return jwtDecode(data.token);
};

export const login = async (email: string, password: string) => {
  const { data } = await authIstance.post(`${REACT_APP_API_URL}/api/login`, {
    email,
    password,
  });

  localStorage.setItem('token', data.token);

  return jwtDecode(data.token);
};
