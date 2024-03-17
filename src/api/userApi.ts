import { jwtDecode } from 'jwt-decode';
import { authIstance } from './http';

export const signIn = async (name: string, email: string, password: string) => {
  const res = await authIstance.post('api/sign-in', {
    name,
    email,
    password,
    role: 'USER',
  });

  return res;
};

export const login = async (email: string, password: string) => {
  const { data } = await authIstance.post('api/login', {
    email,
    password,
  });

  localStorage.setItem('token', data.token);

  return jwtDecode(data.token);
};
