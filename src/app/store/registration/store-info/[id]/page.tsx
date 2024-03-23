import ResgistStorePage from '@/page/EmployerPage/RegistStorePage';
import { StoreItem } from '@/features/Create-Store/Type';

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
  storeId: string | null,
): Promise<StoreItem | EmptyProps> => {
  try {
    if (!storeId) {
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
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${storeId}`,
      // { cache: 'no-store' },
      {
        next: {
          tags: ['collection'],
        },
      },
    );
    if (response.status === 200) {
      const result = await response.json();
      const { item } = result;
      return item;
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
  searchParams,
}: {
  searchParams: {
    storeId: string | null;
  };
}) => {
  const storeId = searchParams?.storeId;
  return (
    <ResgistStorePage
      storeId={storeId}
      storeData={await getStoreData(storeId)}
    />
  );
};

export default StoreInfo;
