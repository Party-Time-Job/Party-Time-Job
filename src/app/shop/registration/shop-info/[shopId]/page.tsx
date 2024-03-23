import ResgistShopPage from '@/page/EmployerPage/RegistShopPage';
import { ShopItem, ShopData } from '@/features/Create-Shop/Type';

interface EmptyProps {
  name: string;
  category: string;
  address1: string;
  address2: string;
  originalHourlyPay: string;
  imageUrl: string;
  description: string;
}

const getShopData = async (
  shopId: string | null,
): Promise<ShopItem | EmptyProps> => {
  try {
    if (!shopId) {
      return {
        name: '',
        category: '',
        address1: '',
        address2: '',
        originalHourlyPay: '',
        imageUrl: '',
        description: '',
      };
    }
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}`,
      {
        next: {
          tags: ['collection'],
        },
      },
    );
    if (response.status === 200) {
      const result = (await response.json()) as ShopData;
      return result.item as ShopItem;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  return {
    name: '',
    category: '',
    address1: '',
    address2: '',
    originalHourlyPay: '',
    imageUrl: '',
    description: '',
  };
};

const ShopInfo = async ({
  params,
}: {
  params: {
    shopId: string | null;
  };
}) => {
  const shopId = params?.shopId;
  return (
    <ResgistShopPage shopId={shopId} shopData={await getShopData(shopId)} />
  );
};

export default ShopInfo;
