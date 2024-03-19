import { revalidateTag } from 'next/cache';
import CreateStore from '@/features/Create-Store/CreateStore';
import { StoreItem } from '@/features/Create-Store/Type';

interface Props {
  storeData: StoreItem;
  storeId: string;
}

const ResgistStorePage = ({ storeData, storeId }: Props) => {
  revalidateTag('collection');
  return <CreateStore storeId={storeId} initialValues={storeData} />;
};

export default ResgistStorePage;
