import ResgistShopPage from '@/page/EmployerPage/RegistShopPage';
import getShopData from './model/Api.ts';

const ShopInfo = async ({
  searchParams,
}: {
  searchParams: {
    shopId: string | null;
  };
}) => {
  const shopId = searchParams?.shopId;
  const shopData = await getShopData(shopId);
  return <ResgistShopPage shopId={shopId} shopData={shopData} />;
};

export default ShopInfo;
