import CreateStore from '@/features/Create-Store/CreateStore';
import { StoreItem } from '@/features/Create-Store/Type';

interface Props {
  storeData: StoreItem;
}

const ResgistStorePage = ({ storeData }: Props) => {
  return <CreateStore initialValues={storeData} />;
};

export default ResgistStorePage;
