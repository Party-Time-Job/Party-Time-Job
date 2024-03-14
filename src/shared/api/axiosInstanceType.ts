import {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export type AxiosInstanceResponse<T = any> = {
  response?: T;
  refreshToken?: string;
};

export interface AxiosInstanceInterface extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<AxiosInstanceResponse>>;
  };

  get<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T>;
  post<T>(
    url: string,
    data?: any,
    config?: InternalAxiosRequestConfig,
  ): Promise<T>;
  put<T>(
    url: string,
    data?: any,
    config?: InternalAxiosRequestConfig,
  ): Promise<T>;
  delete<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T>;
  patch<T>(
    url: string,
    data?: any,
    config?: InternalAxiosRequestConfig,
  ): Promise<T>;
}
