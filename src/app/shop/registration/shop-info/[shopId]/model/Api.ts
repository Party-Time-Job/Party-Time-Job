import { ShopItem, ShopData } from '@/features/Create-Shop/Type';
import { EmptyProps } from './Type.ts';

const getShopData = async (
  shopId: string | null,
): Promise<ShopItem | EmptyProps> => {
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
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}`,
      {
        cache: 'no-cache',
      },
    );
    const result = (await response.json()) as ShopData;
    return result.item as ShopItem;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getShopData;
