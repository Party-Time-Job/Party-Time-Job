'use client';

import Link from 'next/link';
import EmployerPost from './EmployerPost';
import { AllNotice } from '@/entities/Post/types';

interface Props {
  noticeItemList?: AllNotice;
  imageUrl: string;
  shopId: string;
  originalHourlyPay: string;
  name: string;
  address1: string;
}

/**
 * @param {Object} props - NoticeList 컴포넌트의 props
 * @param {string} props.category - 'all', or 'recent' or 'search' or filter
 * @param {string} props.searchValue - category가 'search' 일때 검색어
 * @param {Notice[]} props.recentNoticeList - 최근 본 notice 데이터 배열
 * @returns 전체 공고 리스트, 검색 결과 공고 리스트, 최근 본 공고 리스트
 */
const EmployerNoticeList = ({
  noticeItemList,
  imageUrl,
  shopId,
  originalHourlyPay,
  name,
  address1,
}: Props) => {
  return (
    <div className='mt-10 flex flex-col items-center gap-2 border-t  border-gray-600 pt-10'>
      <div className='flex w-[965px] flex-col gap-[23px]'>
        <span className='flex h-12 w-24 items-center justify-center rounded-lg bg-test-blue text-xl font-bold text-black'>
          내 공고
        </span>
        <section className='flex w-full'>
          <div className='flex w-full gap-5 overflow-auto py-5 scrollbar-hide'>
            {noticeItemList?.items.map(notice => {
              const noticeId = notice.item.id;
              return (
                <Link
                  key={noticeId}
                  href={`/shop/notice-detail/${shopId}/${noticeId}`}
                >
                  <EmployerPost
                    key={noticeId}
                    imageUrl={imageUrl}
                    noticeItem={notice.item}
                    originalHourlyPay={originalHourlyPay}
                    shopId={shopId}
                    name={name}
                    address1={address1}
                  />
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployerNoticeList;
