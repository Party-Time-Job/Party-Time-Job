'use client';

import { useRouter } from 'next/navigation';
import MyStore from '@/entities/Employer/MyStore';
import RegisteredRecruitment from '@/entities/Employer/RegisteredRecruitment';

/**
 * header footer 작업 완료되면 진행 예정
 * 사장 id 정보 조회 후 그 사장이 등록한 가게 정보가 없으면
 * 조건부 렌더링을 통해 <RegisteredRecruitment /> 보여주지 않기
 * 사장 가게 등록 ? <RegisteredRecruitment /> : ''
 */

const DetailsPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('details/registration/store-info/1');
    // 1 -> userId로 바꿔줘야 합니다.
  };
  return (
    <>
      <MyStore onClick={handleClick} />
      <RegisteredRecruitment></RegisteredRecruitment>
    </>
  );
};

export default DetailsPage;
