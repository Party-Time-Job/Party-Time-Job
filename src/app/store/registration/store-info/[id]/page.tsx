import ResgistStorePage from '@/pages/EmployerPage/RegistStorePage';
import { StoreData } from '@/features/Create-Store/Type';

const getStoreData = async (storeId: string): Promise<StoreData> => {
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${storeId}`,
    );
    const result: StoreData = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const Store = async ({
  searchParams,
}: {
  searchParams: {
    storeId: string;
    userId: string;
  };
}) => {
  const { storeId } = searchParams;
  const storeData = await getStoreData(storeId);
  const { item } = storeData;
  return <ResgistStorePage storeData={item} />;
};

export default Store;
