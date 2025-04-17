import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { FieldValues } from 'react-hook-form';
import { getShopId } from '../model/Api.ts';
import { UseCreateShopRequestProps } from '../model/Type.ts';

const useCreateShopRequest = ({
  shopId,
  uploadedImageUrl,
  getValues,
}: UseCreateShopRequestProps) => {
  const BASE_URL = 'https://bootcamp-api.codeit.kr/api/3-2/the-julge';
  const router = useRouter();

  const URL =
    shopId === 'null' ? `${BASE_URL}/shops` : `${BASE_URL}/shops/${shopId}`;
  const method = shopId === 'null' ? 'POST' : 'PUT';
  const requestInfo = async (data: FieldValues): Promise<void> => {
    const originalHourlyPay = getValues('originalHourlyPay') as string;
    const uploadPay = originalHourlyPay.replaceAll(',', '');
    const token = getCookie('token');
    try {
      const response = await fetch(URL, {
        method,
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          ...data,
          imageUrl: uploadedImageUrl,
          originalHourlyPay: uploadPay,
        }),
      });
      if (response.status === 200) {
        if (shopId === null) {
          const currentShopId = await getShopId();
          router.push(`/shop/details/${currentShopId}`);
        } else {
          router.push(`/shop/details/${shopId}`);
        }
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { requestInfo };
};
export default useCreateShopRequest;
