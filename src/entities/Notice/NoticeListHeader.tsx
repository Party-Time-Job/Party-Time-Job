'use client';

import { Dispatch, SetStateAction } from 'react';
import Filter from '@/features/Filter/Filter';
import SortButtonList from './SortButtonList';
import SortSelect from '@/features/Sort/SortSelect';
import { AllNotice } from '../Post/types.ts';
import { FilterCondition } from './types.ts';
import useNoticeListHeader from './hooks/useNoticeListHeader.ts';

interface Props {
  updateItemList: (sortedList: AllNotice) => void;
  filterCondition: FilterCondition;
  updateFilterCondition: (
    address?: string[],
    date?: string,
    pay?: string,
  ) => void;
  applyFilter: () => void;
  searchValue?: string;
  sortCategory: string;
  updateSortCategory: (value: string) => void;
  updatePageNumber: (value: number) => void;
  currentPageNumber: number;
  setListCategory: Dispatch<SetStateAction<string>>;
  listCategory: string;
}

/**
 * 공고 정렬기능, 상세 필터 버튼 영역
 *
 * @param {Object} props - NoticeListHeader 컴포넌트의 props
 * @param {Function} props.updateItemList - 정렬된 공고 목록을 업데이트하는 콜백함수
 * @param {FilterCondition} props.filterCondition - 필터링 조건
 * @param {Function} props.updateFilterCondition - 필터링 조건 업데이트 콜백함수
 * @param {Function} props.applyFilter - 필터링 적용해서 검색
 * @param {string} props.searchValue - 검색어
 * @param {string} props.sortCategory - 정렬 기준
 * @param {Function} props.updateSortCategory - 정렬 기준 업데이트 콜백함수
 * @param {Function} props.updatePageNumber - 페이지네이션 페이지 업데이트 콜백함수
 * @param {number} props.currentPageNumber - 현재 페이지 번호
 * @param {Function} props.setListCategory - 공고를 가져오는 기준 전체 or 정렬 or 필터링 업데이트 함수
 * @param {string} props.listCategory - 공고를 가져오는 기준 전체 or 정렬 or 필터링
 * @returns 공고 정렬기능, 상세 필터 버튼
 */
const NoticeListHeader = ({
  updateItemList,
  filterCondition,
  updateFilterCondition,
  applyFilter,
  searchValue,
  sortCategory,
  updateSortCategory,
  updatePageNumber,
  currentPageNumber,
  setListCategory,
  listCategory,
}: Props) => {
  const { isToggleSort, isToggleFilter, handleToggleSort, handleToggleFilter } =
    useNoticeListHeader();

  return (
    <div className='flex gap-[10px]'>
      <div className='relative flex flex-col gap-[8px]'>
        <SortSelect
          sortCategory={sortCategory}
          handleToggleSort={handleToggleSort}
          isToggleSort={isToggleSort}
        />
        {isToggleSort ? (
          <SortButtonList
            updateItemList={updateItemList}
            updateSortCategory={updateSortCategory}
            handleToggleSort={handleToggleSort}
            searchValue={searchValue}
            updatePageNumber={updatePageNumber}
            currentPageNumber={currentPageNumber}
            listCategory={listCategory}
            filterCondition={filterCondition}
          />
        ) : null}
      </div>
      <div className='md:relative'>
        <button
          type='button'
          className='flex h-[30px] items-center rounded-[5px] bg-test-black p-[12px] text-[14px] font-light text-white'
          onClick={handleToggleFilter}
        >
          상세 필터
        </button>
        {isToggleFilter ? (
          <Filter
            handleToggleFilter={handleToggleFilter}
            filterCondition={filterCondition}
            updateFilterCondition={updateFilterCondition}
            applyFilter={applyFilter}
            setListCategory={setListCategory}
          />
        ) : null}
      </div>
    </div>
  );
};

export default NoticeListHeader;
