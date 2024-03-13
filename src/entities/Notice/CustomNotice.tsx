import Post from '../Post/Post';

/**
 *
 * @param {Notice[]} customNoticeList 주소를 기준으로 가져온 notice객체 list 입니다.
 * @returns '/notice' 의 맞춤 공고 영역
 */
const CustomNotice = ({ customNoticeList }: { customNoticeList: Notice[] }) => {
  // TODO(이시열): 맞춤 공고 자동으로 스크롤
  return (
    <section className='flex w-full items-start justify-center bg-pt-green10 px-[12px] py-[40px] md:px-[32px] md:py-[60px]'>
      <div className='flex w-full flex-col gap-4 md:gap-8 lg:w-[971px]'>
        <span className='text-[20px] font-bold leading-6 md:text-[28px]'>
          맞춤 공고
        </span>
        <div className='scrollbar-hide inline-flex w-full items-start gap-1 overflow-x-scroll md:gap-[14px]'>
          {customNoticeList.map(notice => {
            return <Post key={notice.item.id} noticeItem={notice.item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomNotice;
