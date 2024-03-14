/**
 * header footer 작업 완료되면 진행 예정
 * 사장 id 정보 조회 후 그 사장이 등록한 가게 정보가 없으면
 * 조건부 렌더링을 통해 <RegisteredRecruitment /> 보여주지 않기
 * 사장 가게 등록 ? <RegisteredRecruitment /> : ''
 */

import MyStore from '@/entities/Employer/MyStore';
import RegisteredRecruitment from '@/entities/Employer/RegisteredRecruitment';

const Details = () => {
  return (
    <div>
      <MyStore />
      <RegisteredRecruitment />
    </div>
  );
};

export default Details;
