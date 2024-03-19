import CreateStore from '@/features/Create-Store/CreateStore';
import { StoreItem } from '@/features/Create-Store/Type';

interface Props {
  storeData: StoreItem;
  storeId: string;
}

const ResgistStorePage = ({ storeData, storeId }: Props) => {
  console.log(storeData, '--------------Page------------------');
  return <CreateStore storeId={storeId} initialValues={storeData} />;
};

export default ResgistStorePage;
