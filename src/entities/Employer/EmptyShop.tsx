'use client';

import { useRouter } from 'next/navigation';
import EmpolyerEmptyData from './UI/EmpolyerEmptyData';
import { EmptyShopProps } from './type.ts';

/**
 * 비어있는 가게 정보를 표시하는 컴포넌트
 *
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClick - EmpolyerEmptyData 컴포넌트의 이벤트 핸들러 함수를 전달합니다.
 * @param {string} shopId - 외부 DOM에서 가게를 식별하는 ID. 렌더링할 요소의 ID입니다.
 * @return {JSX.Element} 비어있는 가게 정보를 업데이트 하기 위해 라우팅 안내를 도와주는 요소를 렌더링하는 JSX 요소를 반환합니다.
 */

const EmptyShop = ({ onClick, shopId }: EmptyShopProps) => {
  const router = useRouter();
  const handleNavigate = (routes: string) => {
    router.push(routes);
  };
  return (
    <div
      onClick={() => handleNavigate(`/shop/registration/shop-info/${shopId}`)}
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
export default EmptyShop;
