'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import EmptyRecruitment from '@/entities/Employer/EmptyRecruitment';
import EmployerPost from './EmployerPost';
import { EmployerNoticeListProps } from './type.ts';
import { AllNotice } from '../Post/types.ts';

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
  const [noticeList, setNoticeList] = useState<AllNotice | null>(
    noticeItemList,
  );
  const [isFetching, setIsFetching] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const getShopNotice = async (
    shopIdParams: string,
    offset: number = 0,
    limit: number = 5,
  ): Promise<AllNotice | null> => {
    if (shopIdParams !== null) {
      try {
        const response = await fetch(
          `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopIdParams}/notices?offset=${offset}&limit=${limit}`,
          {
            next: {
              tags: ['noticeItemList'],
            },
          },
        );
        const result: AllNotice = (await response.json()) as AllNotice;
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    } else {
      return null;
    }
  };

  const fetchItems = async () => {
    setIsFetching(true);
    if (noticeList) {
      const res = await getShopNotice(shopId, noticeList.offset + 5, 5);
      console.log(res);
      if (res) {
        setNoticeList({
          ...noticeList,
          items: [...noticeList.items, ...res.items],
          offset: noticeList.offset + 5,
          hasNext: res.hasNext,
        });
      } else {
        setNoticeList({ ...noticeList, hasNext: false });
      }

      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (!observerRef.current || !noticeList?.links) return;

    const nextUrl = noticeList.links.find(l => l.rel === 'next')?.href;
    if (!nextUrl) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isFetching) {
          fetchItems();
        }
      },
      { rootMargin: '0px', threshold: 1.0 },
    );

    observer.observe(observerRef.current);
    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, [noticeList, isFetching]);

  return (
    <div className='md:px-30 mt-10 flex flex-col  gap-2 border-t border-gray-600 px-20 pt-10 lg:px-52'>
      <span className='flex h-12 w-24 items-center justify-center rounded-lg bg-test-green text-base font-bold text-black'>
        {'등록한 공고'}
      </span>
      <div className='flex flex-col gap-[23px]'>
        <section className='flex w-full'>
          <div className='flex w-full gap-5 overflow-auto py-5 scrollbar-hide'>
            {noticeList?.items ? (
              noticeList.items.map(notice => {
                const noticeId = notice.item.id;
                return (
                  <>
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
                    {noticeList.hasNext && (
                      <div
                        ref={observerRef}
                        style={{
                          minWidth: '10px',
                          height: '100px',
                          background: 'transparent',
                        }}
                      />
                    )}
                  </>
                );
              })
            ) : (
              <div className='flex h-[420px] justify-center'>
                {shopId ? <EmptyRecruitment shopId={shopId} /> : null}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployerNoticeList;
