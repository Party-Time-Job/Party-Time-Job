import ResgistStorePage from '@/pages/EmployerPage/RegistStorePage';

const getStoreData = async (storeId: string): Promise<any> => {
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${storeId}`,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return error;
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
  return <ResgistStorePage storeData={storeData.item} />;
};

export default Store;
