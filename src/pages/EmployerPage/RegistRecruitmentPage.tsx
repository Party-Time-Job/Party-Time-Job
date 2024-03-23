import CreateRecruitment from '@/features/Create-Recruitment/CreateRecruitment';
import { Item } from '@/app/store/registration/recruitment/[id]/type';

interface Props {
  noticeData: Item;
  shopId: string;
}

const RegistRecruitmentPage = ({ noticeData, shopId }: Props) => {
  return <CreateRecruitment noticeData={noticeData} shopId={shopId} />;
};

export default RegistRecruitmentPage;
