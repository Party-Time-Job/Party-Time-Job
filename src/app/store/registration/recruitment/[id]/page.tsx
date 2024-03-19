import RegistRecruitmentPage from '@/pages/EmployerPage/RegistRecruitmentPage';

const getNoticeData = async (storeId: string): Promise<any> => {
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${storeId}/notices`,
      // { cache: 'no-store' },
      {
        next: {
          tags: ['collection'],
        },
      },
    );
    const result = await response.json();
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
  const noticeData = await getNoticeData(storeId);
  return <RegistRecruitmentPage noticeData={noticeData} storeId={storeId} />;
};

export default Store;
