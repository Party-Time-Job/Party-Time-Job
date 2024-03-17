import axios from 'axios';
import { getMethod } from '@/shared/api/RequestMethod';
import { ApplicationInterface } from '@/widgets/Application/type';

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
