'use client';

import { useRouter } from 'next/navigation';
import EmpolyerEmptyData from './UI/EmpolyerEmptyData';

/**
 * 비어있는 가게 공고 목록을 표시하는 컴포넌트
 *
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClick - EmpolyerEmptyData 컴포넌트의 이벤트 핸들러 함수를 전달합니다.
 * @param {string} shopId - 외부 DOM에서 가게를 식별하는 ID. 렌더링할 요소의 ID입니다.
 * @return {JSX.Element} 비어있는 공고 목록을 업데이트 하기 위해 라우팅 안내를 도와주는 요소를 렌더링하는 JSX 요소를 반환합니다.
 */

const RegisteredRecruitment = ({
  onClick,
  shopId,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  shopId: string;
}) => {
  const router = useRouter();
  const handleNavigate = (routes: string) => {
    router.push(routes);
  };
  return (
    <div
      onClick={() => {
        handleNavigate(`/shop/registration/recruitment/new?shopId=${shopId}`);
      }}
    >
      <EmpolyerEmptyData
        title='등록한 공고'
        comment='공고를 등록해 보세요'
        content='공고 등록하기'
        onClick={onClick}
      />
    </div>
  );
};

export default RegisteredRecruitment;
