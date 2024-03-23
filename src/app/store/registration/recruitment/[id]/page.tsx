import RegistRecruitmentPage from '@/page/EmployerPage/RegistRecruitmentPage';
import { Item, Data } from './type.ts';
import formatDateTime from '@/entities/Post/utils/formatDateTime.ts';

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
        next: {
          tags: ['collection'],
        },
      },
    );
    const result: Data = (await response.json()) as Data;
    return result.item as Item;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const Store = async ({
  searchParams: { shopId, noticeId },
}: {
  searchParams: {
    shopId: string;
    noticeId: string | null;
  };
}) => {
  const noticeData = await getNoticeData(shopId, noticeId);
  return (
    <RegistRecruitmentPage
      noticeId={noticeId}
      noticeData={noticeData}
      shopId={shopId}
    />
  );
};

export default Store;
