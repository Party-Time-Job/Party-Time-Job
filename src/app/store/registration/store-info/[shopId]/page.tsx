import ResgistStorePage from '@/page/EmployerPage/RegistStorePage';
import { StoreItem, StoreData } from '@/features/Create-Store/Type';

interface EmptyProps {
  name: string;
  category: string;
  address1: string;
  address2: string;
  originalHourlyPay: string;
  imageUrl: string;
  description: string;
}

const getStoreData = async (
  shopId: string | null,
): Promise<StoreItem | EmptyProps> => {
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
      // { cache: 'no-store' },
      {
        next: {
          tags: ['collection'],
        },
      },
    );
    if (response.status === 200) {
      const result = (await response.json()) as StoreData;
      return result.item as StoreItem;
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

const StoreInfo = async ({
  params,
}: {
  params: {
    shopId: string | null;
  };
}) => {
  const shopId = params?.shopId;
  return (
    <ResgistStorePage storeId={shopId} storeData={await getStoreData(shopId)} />
  );
};

export default StoreInfo;
