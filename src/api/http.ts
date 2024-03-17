import axios, { InternalAxiosRequestConfig } from 'axios';
import { REACT_APP_API_URL } from '../variables';

export const hostIstance = axios.create({
  baseURL: REACT_APP_API_URL,
});

export const authIstance = axios.create({
  baseURL: REACT_APP_API_URL,
});

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  const modifiedConfig = { ...config };

  modifiedConfig.headers.authorization = `Bearer ${localStorage.getItem('token')}`;

  return modifiedConfig;
};

authIstance.interceptors.request.use(authInterceptor);
