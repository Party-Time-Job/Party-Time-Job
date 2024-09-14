import CreateRecruitment from '@/features/Create-Recruitment/CreateRecruitment';
import { RegistRecruitmentPageProps } from './type.ts';

const RegistRecruitmentPage = ({
  noticeId,
  noticeData,
  shopId,
}: RegistRecruitmentPageProps) => {
  return (
    <CreateRecruitment
      noticeId={noticeId}
      noticeData={noticeData}
      shopId={shopId}
    />
  );
};

export default RegistRecruitmentPage;
