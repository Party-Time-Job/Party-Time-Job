import axios from 'axios';
import { getMethod } from '@/shared/api/RequestMethod';
import { UserInformationInterface } from '@/widgets/api/type';

const getInformation = async (
  userId: string,
): Promise<UserInformationInterface | string | Error> => {
  try {
    const response = await getMethod<UserInformationInterface>(
      `/users/${userId}`,
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
