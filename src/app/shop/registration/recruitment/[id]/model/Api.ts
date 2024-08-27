import formatDateTime from '@/entities/Post/utils/formatDateTime.ts';
import { Item, Data } from './Type.ts';

const getNoticeData = async (
  shopId: string,
  noticeId: string | null,
): Promise<Item> => {
  if (!noticeId) {
    const TODAY = new Date();
    return {
      id: '',
      hourlyPay: '',
      startsAt: formatDateTime(String(TODAY)),
      workhour: '',
      description: '',
    };
  }
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}`,
      {
        cache: 'no-cache',
      },
    );
    const result: Data = (await response.json()) as Data;
    return result.item as Item;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getNoticeData;
