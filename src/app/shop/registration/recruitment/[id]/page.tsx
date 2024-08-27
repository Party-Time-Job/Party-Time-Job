import RegistRecruitmentPage from '@/page/EmployerPage/RegistRecruitmentPage';
import getNoticeData from './model/Api.ts';

const Shop = async ({
  searchParams: { shopId, noticeId },
}: {
  searchParams: {
    shopId: string;
    noticeId: string | null;
  };
}) => {
  const noticeData = await getNoticeData(shopId, noticeId);
  return (
    <RegistRecruitmentPage
      noticeId={noticeId}
      noticeData={noticeData}
      shopId={shopId}
    />
  );
};

export default Shop;
