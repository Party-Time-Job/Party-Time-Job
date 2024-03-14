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

  getRequest<T>(url: string, config?: InternalAxiosRequestConfig): Promise<T>;
  postRequest<T>(
    url: SVGAnimatedString,
    config?: InternalAxiosRequestConfig,
    data?: any,
  ): Promise<T>;
  putRequest<T>(
    url: SVGAnimatedString,
    config?: InternalAxiosRequestConfig,
    data?: any,
  ): Promise<T>;
  deleteRequest<T>(
    url: string,
    config?: InternalAxiosRequestConfig,
  ): Promise<T>;
  patchRequest<T>(
    url: SVGAnimatedString,
    config?: InternalAxiosRequestConfig,
    data?: any,
  ): Promise<T>;
}
