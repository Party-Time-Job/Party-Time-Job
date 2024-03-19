import CustomNotice from '@/entities/Notice/CustomNotice';
import NoticeList from '@/entities/Notice/NoticeList';
import { AllNotice } from '@/entities/Post/types';
import { getMethod } from '@/shared/api/RequestMethod';

/**
 * '/notice' url의 page 입니다. 맞춤 공고(CustomNotice)와 공고리스트(NoticeList)가 보입니다.
 * @returns 맞춤 공고 영역과 전체 공고 영역
 */
const NoticePage = async () => {
  // TODO(이시열): 전체 공고에서 주소를 기준으로 맞춤 공고 가져오기.
  const noticeItemList = await getMethod<AllNotice>(
    'https://bootcamp-api.codeit.kr/api/3-2/the-julge/notices',
  );
  return (
    <div className='flex flex-col items-center justify-center'>
      <CustomNotice customNoticeList={noticeItemList.items} />
      <NoticeList noticeItemList={noticeItemList.items} />
    </div>
  );
};

export default NoticePage;
