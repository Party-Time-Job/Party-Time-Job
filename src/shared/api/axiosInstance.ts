/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getCookie } from 'cookies-next';
import { AxiosInstanceInterface } from '@/shared/api/axiosInstanceType';

export const AxiosInstance: AxiosInstanceInterface = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/3-2/the-julge/',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
  timeout: 25000,
});

AxiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (config && config.headers) {
      const token = getCookie('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers['Content-Type'] = 'application/json';
      }
    }
    return config;
  },
  (error: AxiosError | Error): Promise<AxiosError> => Promise.reject(error),
);

export default AxiosInstance;
