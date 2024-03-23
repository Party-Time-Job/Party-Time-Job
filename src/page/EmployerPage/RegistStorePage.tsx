import { revalidateTag } from 'next/cache';
import CreateStore from '@/features/Create-Store/CreateStore';
import { StoreItem } from '@/features/Create-Store/Type';

interface EmptyProps {
  name: string;
  category: string;
  address1: string;
  address2: string;
  originalHourlyPay: string;
  imageUrl: string;
  description: string;
}
interface Props {
  storeData: StoreItem | EmptyProps;
  storeId: string | null;
}

const ResgistStorePage = ({ storeData, storeId }: Props) => {
  revalidateTag('collection');
  return <CreateStore storeId={storeId} initialValues={storeData} />;
};

export default ResgistStorePage;
