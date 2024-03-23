import { revalidateTag } from 'next/cache';
import CreateShop from '@/features/Create-Shop/CreateShop';
import { ShopItem } from '@/features/Create-Shop/Type';

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
  shopData: ShopItem | EmptyProps;
  shopId: string | null;
}

const ResgistShopPage = ({ shopData, shopId }: Props) => {
  revalidateTag('collection');
  return <CreateShop shopId={shopId} initialValues={shopData} />;
};

export default ResgistShopPage;
