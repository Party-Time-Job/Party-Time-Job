import ResgistShopPage from '@/page/EmployerPage/RegistShopPage';
import getShopData from './model/Api.ts';

const ShopInfo = async ({
  searchParams: { shopId },
}: {
  searchParams: {
    shopId: string | null;
  };
}) => {
  const shopData = await getShopData(shopId);
  return <ResgistShopPage shopId={shopId} shopData={shopData} />;
};

export default ShopInfo;
