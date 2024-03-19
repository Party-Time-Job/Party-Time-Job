import CreateRecruitment from '@/features/Create-Recruitment/CreateRecruitment';
import { StoreItem } from '@/features/Create-Store/Type';

interface Props {
  noticeData: StoreItem;
  storeId: string;
}

const RegistRecruitmentPage = ({ storeId }: Props) => {
  return <CreateRecruitment storeId={storeId} />;
};

export default RegistRecruitmentPage;
