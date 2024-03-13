import Link from 'next/link';
import Post from '../Post/Post';
import NoticeListHeader from './NoticeListHeader';

interface Props {
  category?: string;
  searchValue?: string;
  noticeItemList: Notice[];
}

/**
 *
 * @param {string} category 'all', or 'recent' or 'search'
 * @param {string} searchValue caregory가 'search' 일때 검색어
 * @param {Notice[]} noticeItemList notice 데이터 배열
 *
 * @returns 전체 공고 리스트, 검색 결과 공고 리스트, 최근 본 공고 리스트
 */
const NoticeList = ({
  category = 'all',
  searchValue,
  noticeItemList,
}: Props) => {
  // TODO(이시열) : Button component 적용, 페이지네이션, 전체 공고 list 받아오기
  const updateNoticeCategory = (value: string) => {
    if (value === 'all') {
      return (
        <span className='text-[20px] font-bold leading-6 md:text-[28px]'>
          전체 공고
        </span>
      );
    }
    if (value === 'recent') {
      return (
        <span className='text-[20px] font-bold leading-6 md:text-[28px]'>
          최근에 본 공고
        </span>
      );
    }
    if (value === 'search') {
      return (
        <span className='text-[20px] font-bold leading-6 md:text-[28px]'>
          <span className='text-pt-green30'>{searchValue}</span>에 대한 공고
          목록
        </span>
      );
    }
    return null;
  };
  return (
    <section className='flex items-center justify-center px-[12px] pb-[80px] pt-[40px] md:px-[32px] md:py-[60px] lg:px-0'>
      <div className='flex flex-col gap-4 md:w-[650px] md:gap-8 lg:w-[971px]'>
        <div className='flex w-full flex-col items-start gap-4 md:flex-row md:justify-between'>
          {updateNoticeCategory(category)}
          {category !== 'recent' ? <NoticeListHeader /> : null}
        </div>
        <div className='grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-4 md:gap-x-[14px] md:gap-y-[32px] lg:grid-cols-3 lg:grid-rows-2'>
          {noticeItemList.map(notice => {
            return (
              <Link
                key={notice.item.id}
                href={`/detail/${notice.item.shop.item.id}/${notice.item.id}`}
              >
                <Post key={notice.item.id} noticeItem={notice.item} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NoticeList;
