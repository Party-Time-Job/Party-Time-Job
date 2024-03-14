import { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import AxiosInstance from '@/shared/api/axiosInstance';
import { ResponseInterface } from '@/shared/api/axiosInstanceType';

/**
 *
 * @param {string} url HTTP 요청 URL
 * @param {any} data 요청에 포함할 데이터
 * @param {Object} config Aixos 요청 객체
 * @returns HTTP 요청 메서드
 */

export const getMethod = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await AxiosInstance.get<ResponseInterface<T>>(
    url,
    config as InternalAxiosRequestConfig,
  );
  return response.data;
};

export const postMethod = async <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await AxiosInstance.post<ResponseInterface<T>>(
    url,
    config as InternalAxiosRequestConfig,
    data,
  );
  return response.data;
};

export const putMethod = async <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await AxiosInstance.put<ResponseInterface<T>>(
    url,
    config as InternalAxiosRequestConfig,
    data,
  );
  return response.data;
};

export const deleteMethod = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await AxiosInstance.delete<ResponseInterface<T>>(
    url,
    config as InternalAxiosRequestConfig,
  );
  return response.data;
};

export const patchMethod = async <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await AxiosInstance.patch<ResponseInterface<T>>(
    url,
    config as InternalAxiosRequestConfig,
    data,
  );
  return response.data;
};
