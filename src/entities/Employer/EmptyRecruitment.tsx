'use client';

import { useRouter } from 'next/navigation';
import EmpolyerEmptyData from './UI/EmpolyerEmptyData';

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
