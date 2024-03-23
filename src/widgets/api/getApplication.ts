/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';
import { getMethod } from '@/shared/api/RequestMethod';
import { ApplicationInterface } from '@/widgets/Application/type';

/**
 *
 * @param {string} userId 사용자 ID
 * @param {number} offset 조회 시작 기준
 * @param {number} limit 조회 개수
 * @param {string} token 토큰(선택)
 * @returns itmes, links 반환
 */

const getApplication = async (
  userId: string,
  params?: {
    offset?: number;
    limit?: number;
    token?: string;
  },
): Promise<ApplicationInterface | string | Error> => {
  try {
    let queryString = '';
    if (params?.offset) {
      queryString += `&offset=${params?.offset}`;
    }
    if (params?.limit) {
      queryString += `&limit=${params?.limit}`;
    }
    if (queryString.length) {
      queryString = queryString.slice(1);
    }

    const response = await getMethod<ApplicationInterface>(
      `/users/${userId}/applications?${queryString}`,
      {
        headers: {
          Authorization: `Bearer ${params?.token}`,
        },
      },
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (!error.response?.data.message) {
        return error as Error;
      }
      return error.response?.data.message;
    }
    return error as Error;
  }
};

export default getApplication;
