import Post from '@/entities/Post';

const getNoticeDetail = async (shopId: string, noticeId: string) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/${shopId}/notices/${noticeId}`,
  );
  const result: NoticeDetail = await response.json();
  return result;
};

const NoticeDetail = async ({
  shopId,
  noticeId,
}: {
  shopId: string;
  noticeId: string;
}) => {
  const data = await getNoticeDetail(shopId, noticeId);
  return (
    <section className='w-full px-[12px] py-[40px]'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <span className='text-[14px] font-bold text-pt-green40'>
            {data.item.shop.item.category}
          </span>
          <span className='text-[20px] font-bold'>
            {data.item.shop.item.name}
          </span>
        </div>
        <div className='flex flex-col gap-3'>
          {/* 임시 컴포넌트 */}
          <Post noticeItem={data.item} />
          <div className='flex flex-col items-start gap-2 rounded-xl bg-pt-gray20 p-[20px]'>
            <span className='text-[14px] font-bold'>공고 설명</span>
            <p className='text-[14px] leading-[22px]'>
              {data.item.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeDetail;
