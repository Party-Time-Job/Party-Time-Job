import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { UseRequestInfoProps, ErrorResponse } from '../model/Type.ts';

const BASE_URL = 'https://bootcamp-api.codeit.kr/api/3-2/the-julge';

const useRequestInfo = ({
  noticeId,
  shopId,
  getValues,
}: UseRequestInfoProps) => {
  const router = useRouter();
  const requestInfo = async (data: FieldValues): Promise<void> => {
    const token = getCookie('token');
    const { startsAt } = getValues();
    const url = noticeId
      ? `${BASE_URL}/shops/${shopId}/notices/${noticeId}`
      : `${BASE_URL}/shops/${shopId}/notices`;
    const method = noticeId ? 'PUT' : 'POST';
    try {
      const response = await fetch(url, {
        method,
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          ...data,
          startsAt: new Date(startsAt).toISOString(),
        }),
      });

      if (response.ok) {
        router.push(`/shop/details/${shopId}`);
        router.refresh();
      } else {
        const errorResponse = (await response.json()) as ErrorResponse;
        throw new Error(errorResponse.message || '예상치 못한 오류 발생');
      }
    } catch (error) {
      if (error instanceof Error) {
        // eslint-disable-next-line no-alert
        alert(error.message);
      }
    }
  };

  return { requestInfo };
};

export default useRequestInfo;
