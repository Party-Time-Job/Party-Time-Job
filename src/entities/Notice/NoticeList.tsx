'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import filterNotice from '@/features/Filter/utils/filterNotice.ts';
import Post from '../Post/Post';
import { Notice } from '../Post/types.ts';
import NoticeListHeader from './NoticeListHeader';
import Pagination from './Pagination.tsx';
import { FilterCondition } from './types.ts';
import getNoticeList from './utils/getNoticeList.ts';
import { AllNotice } from '@/entities/Post/types';

interface Props {
  category: string;
  searchValue?: string;
  recentNoticeList?: Notice[];
}

/**
 * @param {Object} props - NoticeList 컴포넌트의 props
 * @param {string} props.category - 'all', or 'recent' or 'search'
 * @param {string} props.searchValue - category가 'search' 일때 검색어
 * @param {Notice[]} props.noticeItemList - notice 데이터 배열
 * @returns 전체 공고 리스트, 검색 결과 공고 리스트, 최근 본 공고 리스트
 */
const NoticeList = ({ category, searchValue, recentNoticeList }: Props) => {
  const [itemList, setItemList] = useState<Notice[]>([]);
  const [filterCondition, setFilterCondition] = useState<FilterCondition>({
    address: [],
    date: '',
    pay: '',
  });
  console.log(itemList);
  const [noticeItemList, setNoticeItemList] = useState<AllNotice>({
    offset: 0,
    limit: 0,
    address: [],
    count: 0,
    hasNext: false,
    items: [],
    links: [],
  });
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [sortCategory, setSortCategory] = useState('time');

  const updatePageNumber = (value: number) => {
    setCurrentPageNumber(value);
  };

  const updateSortCategory = (value: string) => {
    setSortCategory(value);
  };

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

  useEffect(() => {
    if (category === 'search') {
      getNoticeList(setNoticeItemList, 0, sortCategory, category, searchValue);
      return;
    }
    if (category === 'all') {
      getNoticeList(setNoticeItemList, 0, sortCategory);
    }
  }, [searchValue]);

  const applyFilter = () => {
    filterNotice(noticeItemList.items, filterCondition, setItemList);
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

  const updateItemList = (sortedList: AllNotice) => {
    setNoticeItemList(sortedList);
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
    <section className='flex flex-col items-center justify-center px-[12px] pb-[80px] pt-[40px] md:px-[32px] md:py-[60px] lg:px-0'>
      <div className='flex flex-col gap-4 md:w-[650px] md:gap-8 lg:w-[971px]'>
        <div className='flex w-full flex-col items-start gap-4 md:flex-row md:justify-between'>
          {updateNoticeCategory(category)}
          {category !== 'recent' ? (
            <NoticeListHeader
              updateItemList={updateItemList}
              filterCondition={filterCondition}
              updateFilterCondition={updateFilterCondition}
              applyFilter={applyFilter}
              searchValue={searchValue}
              sortCategory={sortCategory}
              updateSortCategory={updateSortCategory}
              updatePageNumber={updatePageNumber}
              currentPageNumber={currentPageNumber}
            />
          ) : null}
        </div>
        <div className='grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-4 md:gap-x-[14px] md:gap-y-[32px] lg:grid-cols-3 lg:grid-rows-2'>
          {noticeItemList.items.map(notice => {
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
      <Pagination
        count={noticeItemList.count}
        currentPageNumber={currentPageNumber}
        updatePageNumber={updatePageNumber}
        setNoticeItemList={setNoticeItemList}
        sortCategory={sortCategory}
      />
    </section>
  );
};

export default NoticeList;
