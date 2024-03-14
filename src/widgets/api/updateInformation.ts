import axios from 'axios';
import { putMethod } from '@/shared/api/RequestMethod';
import { UserInformationInterface } from '@/widgets/api/type';

const updateInformation = async (
  userId: string,
  params: {
    name: string;
    phone: string;
    address: string;
    bio: string;
    token?: string;
  },
): Promise<UserInformationInterface | string | Error> => {
  try {
    const response = await putMethod<UserInformationInterface>(
      `/users/${userId}`,
      {
        name: params.name,
        phone: params.phone,
        address: params.address,
        bio: params.bio,
      },
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

export default updateInformation;
