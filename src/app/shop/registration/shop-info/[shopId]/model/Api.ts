import { ShopItem, ShopData } from '@/features/Create-Shop/Type';
import { EmptyProps } from './Type.ts';

const getShopData = async (
  shopId: string | null,
): Promise<ShopItem | EmptyProps> => {
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}`,
      {
        cache: 'no-cache',
      },
    );
    if (response.status === 200) {
      const result = (await response.json()) as ShopData;
      return result.item as ShopItem;
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
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getShopData;
