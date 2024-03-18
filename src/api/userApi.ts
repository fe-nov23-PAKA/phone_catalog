import { jwtDecode } from 'jwt-decode';
import { authIstance } from './http';

export const signIn = async (
  userName: string,
  email: string,
  password: string,
) => {
  const res = await authIstance.post('api/sign-in', {
    userName,
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

export const activate = async (activationToken: string) => {
  const res = await authIstance.get('api/activate', {
    activationToken,
  });

  return res;
};
