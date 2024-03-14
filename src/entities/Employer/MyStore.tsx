import { useRouter } from 'next/router';
import EmpolyerEmptyData from './UI/EmpolyerEmptyData';

const MyStore = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('details/registration/store/1');
    // 1 -> userId로 바꿔줘야 합니다.
  };
  return (
    <>
      <EmpolyerEmptyData
        title='내 가게'
        comment='내 가게를 소개하고 공고도 등록해 보세요'
        content='가게 등록하기'
        onClick={handleClick}
      />
    </>
  );
};
export default MyStore;
