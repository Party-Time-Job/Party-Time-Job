'use client';

import { useRouter } from 'next/navigation';
import EmpolyerEmptyData from './UI/EmpolyerEmptyData';

const RegisteredRecruitment = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('details/registration/recruitment/1');
    // 1 -> userId로 바꿔줘야 합니다.
  };
  return (
    <>
      <EmpolyerEmptyData
        title='등록한 공고'
        comment='공고를 등록해 보세요'
        content='공고 등록하기'
        onClick={handleClick}
      />
    </>
  );
};

export default RegisteredRecruitment;
