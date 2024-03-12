import AllNotice from '@/widgets/AllNotice';
import CustomNotice from '@/widgets/CustomNotice';

// 임시로 만든 함수. '/public/data/mock.json' 에서 데이터를 가져옵니다.
const getNotice = async () => {
  const response = await fetch('http://localhost:3000/data/mock.json');
  const result: AllNotice = await response.json();
  const NoticeList: Notice[] = result.items;
  return NoticeList;
};

/**
 * '/notice' url의 page 입니다. 맞춤 공고(CustomNotice)와 전체 공고(AllNotice)가 보입니다.
 * @returns 맞춤 공고 영역과 전체 공고 영역
 */
const page = async () => {
  // TODO(이시열): 전체 공고에서 주소를 기준으로 맞춤 공고 가져오기.
  // 전체 공고 가져오는 fetch 함수 만들기.
  const customNoticeList = await getNotice();
  return (
    <div className='flex flex-col items-center justify-center'>
      <CustomNotice customNoticeList={customNoticeList} />
      <AllNotice />
    </div>
  );
};

export default page;
