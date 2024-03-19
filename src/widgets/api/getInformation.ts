import axios from 'axios';
import { getMethod } from '@/shared/api/RequestMethod';
import { UserInformationInterface } from '@/widgets/api/type';

/**
 *
 * @param {string} userid 사용자 ID
 * @returns items, links 반환
 */

const getInformation = async (
  userid: string,
): Promise<UserInformationInterface | string | Error> => {
  try {
    const response = await getMethod<UserInformationInterface>(
      `/users/${userid}`,
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

export default getInformation;
