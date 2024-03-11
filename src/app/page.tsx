import Badge from '@/shared/UI/Badge';

export default function Home() {
  return (
    <>
      <h1>HomePage</h1>
      <Badge type='approved'>승인완료</Badge>
      <Badge type='pending'>대기중</Badge>
      <Badge type='location'>서울시 성동구</Badge>
    </>
  );
}
