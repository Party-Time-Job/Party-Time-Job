import Filter from '@/features/Filter/Filter';
import MyStore from '@/entities/Employer/MyStore';
import Badge from '@/shared/UI/Badge';
import RegisteredRecruitment from '@/entities/Employer/RegisteredRecruitment';

export default function Home() {
  return (
    <>
      <h1>HomePage</h1>
      <Badge>승인완료</Badge>
      <Badge>대기중</Badge>
      <Badge>서울시 성동구</Badge>
      <Filter></Filter>
      <MyStore></MyStore>
      <RegisteredRecruitment></RegisteredRecruitment>
    </>
  );
}
