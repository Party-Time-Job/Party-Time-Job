'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import NoticeListHeader from './NoticeListHeader';
import { Notice } from '../Post/types.ts';
import filterNotice from '@/features/Filter/utils/filterNotice.ts';
import { FilterCondition } from './types.ts';

interface Props {
  category?: string;
  searchValue?: string;
  noticeItemList: Notice[] | [];
}

/**
 * @param {Object} props - NoticeList 컴포넌트의 props
 * @param {string} props.category - 'all', or 'recent' or 'search'
 * @param {string} props.searchValue - category가 'search' 일때 검색어
 * @param {Notice[]} props.noticeItemList - notice 데이터 배열
 * @returns 전체 공고 리스트, 검색 결과 공고 리스트, 최근 본 공고 리스트
 */
const NoticeList = ({
  category = 'all',
  searchValue,
  noticeItemList,
}: Props) => {
  // TODO(이시열) : Button component 적용, 페이지네이션
  const [itemList, setItemList] = useState<Notice[]>([]);
  const [filterCondition, setFilterCondition] = useState<FilterCondition>({
    address: [],
    date: '',
    pay: '',
  });

  useEffect(() => {
    setItemList(noticeItemList);
  }, [noticeItemList]);

  const applyFilter = () => {
    filterNotice(noticeItemList, filterCondition, setItemList);
  };

  const updateFilterCondition = (
    address?: string[],
    date?: string,
    pay?: string,
  ) => {
    setFilterCondition(prev => ({
      ...prev,
      address,
      date,
      pay,
    }));
  };

  const updateItemList = (sortedList: Notice[]) => {
    setItemList(sortedList);
  };

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
          {category !== 'recent' ? (
            <NoticeListHeader
              updateItemList={updateItemList}
              itemList={itemList}
              filterCondition={filterCondition}
              updateFilterCondition={updateFilterCondition}
              applyFilter={applyFilter}
            />
          ) : null}
        </div>
        <div className='grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-4 md:gap-x-[14px] md:gap-y-[32px] lg:grid-cols-3 lg:grid-rows-2'>
          {itemList.map(notice => {
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
