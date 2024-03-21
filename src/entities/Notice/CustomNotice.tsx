'use client';

import Link from 'next/link';
import Post from '../Post/Post';
import useCustomNotice from './hooks/useCustomNotice.ts';

/**
 * @returns '/notice' 의 맞춤 공고 영역
 */
const CustomNotice = () => {
  const customNotice = useCustomNotice();

  return (
    <section className='flex w-full items-start justify-center bg-pt-green10 px-[12px] py-[40px] md:px-[32px] md:py-[60px]'>
      <div className='flex w-full flex-col gap-4 md:gap-8 lg:w-[971px]'>
        <span className='text-[20px] font-bold leading-6 md:text-[28px]'>
          맞춤 공고
        </span>
        <div className='inline-flex w-full items-start gap-1 overflow-x-scroll scrollbar-hide md:gap-[14px]'>
          {customNotice?.map(notice => {
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

export default CustomNotice;
