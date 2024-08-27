import ResgistShopPage from '@/page/EmployerPage/RegistShopPage';
import getShopData from './model/Api.ts';

const ShopInfo = async ({
  params: { shopId },
}: {
  params: {
    shopId: string;
  };
}) => {
  const shopData = await getShopData(shopId);
  return <ResgistShopPage shopId={shopId} shopData={shopData} />;
};

export default ShopInfo;
