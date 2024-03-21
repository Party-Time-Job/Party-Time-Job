import { useEffect, useState } from 'react';
import { AllNotice, Notice } from '@/entities/Post/types';
import getNoticeList from '../utils/getNoticeList.ts';
import { FilterCondition } from '../types.ts';

const useNoticeState = (
  category: string,
  searchValue?: string,
  recentNoticeList?: Notice[],
) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [sortCategory, setSortCategory] = useState('time');
  const [listCategory, setListCategory] = useState(category);
  const [filterCondition, setFilterCondition] = useState<FilterCondition>({
    address: [],
    date: '',
    pay: '',
  });
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
      setNoticeItemList(prev => ({
        ...prev,
        items: recentNoticeList,
      }));
    } else if (category === 'search') {
      getNoticeList(setNoticeItemList, 0, sortCategory, category, searchValue);
    } else if (category === 'all') {
      getNoticeList(setNoticeItemList, 0, sortCategory);
    }
  }, [recentNoticeList, category, searchValue]);

  const updatePageNumber = (value: number) => {
    setCurrentPageNumber(value);
  };

  const updateSortCategory = (value: string) => {
    setSortCategory(value);
  };
  const applyFilter = () => {
    setListCategory('filter');
    getNoticeList(
      setNoticeItemList,
      0,
      sortCategory,
      'filter',
      searchValue,
      filterCondition,
    );
    if (currentPageNumber !== 1) {
      updatePageNumber(1);
    }
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
  return {
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
  };
};

export default useNoticeState;
