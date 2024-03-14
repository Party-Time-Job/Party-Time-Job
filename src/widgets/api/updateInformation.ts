import axios from 'axios';
import { putMethod } from '@/shared/api/RequestMethod';
import { UserInformationInterface } from '@/widgets/api/type';

/**
 *
 * @param {string} userId 사용자ID
 * @param {string} name 사용자 이름
 * @param {string} phone 사용자 연락처
 * @param {string} address 사용자 선호지역
 * @param {string} bio 사용자 소개
 * @param {string} token 토큰(선택)
 * @returns 사용자 정보 업데이트
 */

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
    // 오류 처리
    // Axios 오류 객체 반환
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
