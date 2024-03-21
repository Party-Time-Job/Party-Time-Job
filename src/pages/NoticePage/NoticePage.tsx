import CustomNotice from '@/entities/Notice/CustomNotice';
import NoticeList from '@/entities/Notice/NoticeList';

/**
 * '/notice' url의 page 입니다. 맞춤 공고(CustomNotice)와 공고리스트(NoticeList)가 보입니다.
 * @returns 맞춤 공고 영역과 전체 공고 영역
 */
const NoticePage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <CustomNotice />
      <NoticeList category='all' />
    </div>
  );
};

export default NoticePage;
