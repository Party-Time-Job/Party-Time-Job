'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import EmployerPost from '../Post/EmployerDetailPost.tsx';
import { Notice } from '../Post/types.ts';
import { AllNotice } from '@/entities/Post/types';

interface Props {
  recentNoticeList?: Notice[];
}

/**
 * @param {Object} props - NoticeList 컴포넌트의 props
 * @param {string} props.category - 'all', or 'recent' or 'search' or filter
 * @param {string} props.searchValue - category가 'search' 일때 검색어
 * @param {Notice[]} props.recentNoticeList - 최근 본 notice 데이터 배열
 * @returns 전체 공고 리스트, 검색 결과 공고 리스트, 최근 본 공고 리스트
 */
const EmployerNoticeList = ({ recentNoticeList }: Props) => {
  const [noticeItemList, setNoticeItemList] = useState<AllNotice>({
    offset: 0,
    limit: 0,
    address: [],
    count: 0,
    hasNext: false,
    items: [],
    links: [],
  });

  useEffect(() => {
    if (recentNoticeList) {
      setNoticeItemList(prev => {
        return {
          ...prev,
          items: recentNoticeList,
        };
      });
    }
  }, [recentNoticeList]);

  return (
    <section className='flex flex-col items-center justify-center px-[12px] pb-[80px] pt-[40px] md:px-[32px] md:py-[60px] lg:px-0'>
      <div className='flex flex-col gap-4 md:w-[650px] md:gap-8 lg:w-[971px]'>
        <div className='flex w-full flex-col items-start gap-4 md:flex-row md:justify-between'></div>
        <div className='grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-4 md:gap-x-[14px] md:gap-y-[32px] lg:grid-cols-3 lg:grid-rows-2'>
          {noticeItemList.items.map(notice => {
            const shopId = notice.item.shop.item.id;
            const noticeId = notice.item.id;
            return (
              <Link key={noticeId} href={`/detail/${shopId}/${noticeId}`}>
                <EmployerPost key={noticeId} noticeItem={notice.item} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmployerNoticeList;
