import { revalidateTag } from 'next/cache';
import DetailsPage from '@/page/EmployerPage/DetailsPage';
import { getShopNotice, getShopInfo } from '../../model/Api.ts';

const Details = async ({
  params: { shopId },
}: {
  params: {
    shopId: string;
  };
}) => {
  const shopInfo = await getShopInfo(shopId);
  revalidateTag('shopInfo');
  const shopNotice = await getShopNotice(shopId);
  revalidateTag('noticeItemList');
  return (
    <DetailsPage
      shopInfo={shopInfo}
      noticeItemList={shopNotice}
      shopId={shopId}
    />
  );
};

export default Details;
