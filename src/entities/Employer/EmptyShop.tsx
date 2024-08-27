'use client';

import { useRouter } from 'next/navigation';
import EmpolyerEmptyData from './UI/EmpolyerEmptyData';

interface MyShopProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  shopId: string;
}

const MyShop = ({ onClick, shopId }: MyShopProps) => {
  const router = useRouter();
  const handleNavigate = (routes: string) => {
    router.push(routes);
  };
  return (
    <div
      onClick={() =>
        handleNavigate(`/shop/registration/shop-info/new?shopId=${shopId}`)
      }
    >
      <EmpolyerEmptyData
        title='내 가게'
        comment='내 가게를 소개하고 공고도 등록해 보세요'
        content='가게 등록하기'
        onClick={onClick}
      />
    </div>
  );
};
export default MyShop;
