import EmpolyerEmptyData from '@/entities/EmpolyerEmptyData';

export default function Home() {
  return (
    <>
      <h1>HomePage</h1>
      <EmpolyerEmptyData
        title='내 가게'
        comment='내 가게를 소개하고 공고도 등록해 보세요'
        content='가게 등록하기'
      />
      <EmpolyerEmptyData
        title='등록한 공고'
        comment='공고를 등록해 보세요'
        content='공고 등록하기'
      />
    </>
  );
}
