'use client';

import Link from 'next/link';
import EmployerPost from './EmployerPost';
import { EmployerNoticeListProps } from './type.ts';

/**
 * 가게 공고 목록을 출력하는 컴포넌트 입니다.
 *
 * @param {AllNotice | null} noticeItemList - 공고 목록 아이템들을 전달받아 화면에 출력합니다.
 * @param {string} shopId - 공고 클릭시, 라우팅 또는 공고 조회를 위해서 props로 전달합니다.
 * @param {string} shopInfo - 공고 카드를 통해 shopInfo를 출력하기 위해서 props로 전달합니다.
 * @returns 전체 공고 리스트, 검색 결과 공고 리스트, 최근 본 공고 리스트
 */

const EmployerNoticeList = ({
  noticeItemList,
  shopId,
  shopInfo,
}: EmployerNoticeListProps) => {
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
                    noticeItem={notice.item}
                    shopId={shopId}
                    shopInfo={shopInfo}
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
