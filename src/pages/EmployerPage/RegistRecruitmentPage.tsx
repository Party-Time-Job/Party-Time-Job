import CreateRecruitment from '@/features/Create-Recruitment/CreateRecruitment';
import { StoreItem } from '@/features/Create-Store/Type';

interface Props {
  noticeData: StoreItem;
  storeId: string;
}

const RegistRecruitmentPage = ({ noticeData, storeId }: Props) => {
  return <CreateRecruitment initialValues={noticeData} storeId={storeId} />;
};

export default RegistRecruitmentPage;
