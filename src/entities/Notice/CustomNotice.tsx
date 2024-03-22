'use client';

import Link from 'next/link';
import Post from '../Post/Post';
import useCustomNotice from './hooks/useCustomNotice.ts';
import CustomNoticeLoading from './CustomNoticeLoading.tsx';
import Text from '@/shared/ui/Text.tsx';

/**
 * @returns '/notice' 의 맞춤 공고 영역
 */
const CustomNotice = () => {
  const customNotice = useCustomNotice();

  return (
    <section className='flex w-full items-start justify-center border-b border-gray-500 bg-black px-[12px] py-[40px] md:px-[32px] md:py-[60px]'>
      <div className='flex w-full flex-col gap-4 md:gap-8 lg:w-[971px]'>
        <div className='flex h-10 w-28 items-center justify-center rounded-lg border border-test-green bg-black text-white'>
          <Text as='span' className='font-bold'>
            맞춤공고
          </Text>
        </div>
        <div className='inline-flex h-[400px] w-full items-center gap-1 overflow-x-scroll scrollbar-hide md:gap-[14px]'>
          {customNotice ? (
            customNotice.map(notice => {
              return (
                <Link
                  key={notice.item.id}
                  href={`/detail/${notice.item.shop.item.id}/${notice.item.id}`}
                >
                  <Post key={notice.item.id} noticeItem={notice.item} />
                </Link>
              );
            })
          ) : (
            <CustomNoticeLoading />
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomNotice;
