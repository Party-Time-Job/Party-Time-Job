'use client';

import Link from 'next/link';
import Post from '../Post/Post';
import { Notice } from '../Post/types.ts';
import NoticeListHeader from './NoticeListHeader';
import Pagination from './Pagination.tsx';
import useNoticeListState from './hooks/useNoticeListState.ts';
import NoticeCategory from './NoticeCategory.tsx';
import NoticeListLoading from './NoticeListLoading.tsx';


interface Props {
  category: string;
  searchValue?: string;
  recentNoticeList?: Notice[];
}

/**
 * @param {Object} props - NoticeList 컴포넌트의 props
 * @param {string} props.category - 'all', or 'recent' or 'search' or filter
 * @param {string} props.searchValue - category가 'search' 일때 검색어
 * @param {Notice[]} props.recentNoticeList - 최근 본 notice 데이터 배열
 * @returns 전체 공고 리스트, 검색 결과 공고 리스트, 최근 본 공고 리스트
 */
const NoticeList = ({ category, searchValue, recentNoticeList }: Props) => {
  const {
    filterCondition,
    sortCategory,
    currentPageNumber,
    listCategory,
    noticeItemList,
    updateItemList,
    updateFilterCondition,
    applyFilter,
    updateSortCategory,
    updatePageNumber,
    setListCategory,
    setNoticeItemList,
  } = useNoticeListState(category, searchValue, recentNoticeList);


  return (
    <section className='flex flex-col items-center justify-center px-[12px] pb-[80px] pt-[40px] md:px-[32px] md:py-[60px] lg:px-0'>
      <div className='flex flex-col gap-4 md:w-[650px] md:gap-8 lg:w-[971px]'>
        <div className='flex w-full flex-col items-start gap-4 md:flex-row md:justify-between'>
          <NoticeCategory category={category} searchValue={searchValue} />
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
              setListCategory={setListCategory}
              listCategory={listCategory}
            />
          ) : null}
        </div>
        <div className='grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-4 md:gap-x-[14px] md:gap-y-[32px] lg:grid-cols-3 lg:grid-rows-2'>
          {noticeItemList.items.length !== 0 ? (
            noticeItemList.items.map(notice => {
              const shopId = notice.item.shop.item.id;
              const noticeId = notice.item.id;
              return (
                <Link key={noticeId} href={`/detail/${shopId}/${noticeId}`}>
                  <Post key={noticeId} noticeItem={notice.item} />
                </Link>
              );
            })
          ) : (
            <NoticeListLoading />
          )}
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
