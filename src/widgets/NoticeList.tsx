import Post from '@/entities/Post';

interface Props {
  category?: string;
  searchValue?: string;
  noticeItemList: Notice[];
}

/**
 * @returns '/notice'의 전체 공고 영역
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
    <section className='px-[12px] pb-[80px] pt-[40px] md:px-[32px] md:py-[60px] lg:px-0'>
      <div className='flex flex-col gap-4 md:gap-8'>
        <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between'>
          {updateNoticeCategory(category)}
          <div className='flex gap-[10px]'>
            <button type='button'>마감임박순</button>
            <button type='button'>상세 필터</button>
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-4 md:gap-x-[14px] md:gap-y-[32px] lg:grid-cols-3 lg:grid-rows-2'>
          {noticeItemList.map(notice => {
            return <Post key={notice.item.id} noticeItem={notice.item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default NoticeList;
