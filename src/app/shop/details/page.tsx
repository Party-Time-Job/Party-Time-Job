import { revalidateTag } from 'next/cache';
import DetailsPage from '@/page/EmployerPage/DetailsPage';
import { getShopId, getShopNotice, getShopInfo } from '../model/Api.ts';

const Details = async () => {
  const shopId = await getShopId();
  const shopNotice = await getShopNotice(shopId);
  revalidateTag('noticeItemList');
  const shopInfo = await getShopInfo(shopId);
  revalidateTag('shopInfo');
  return (
    <DetailsPage
      shopInfo={shopInfo}
      noticeItemList={shopNotice}
      hasNotice={shopNotice?.count}
      shopId={shopId}
    />
  );
};

export default Details;
