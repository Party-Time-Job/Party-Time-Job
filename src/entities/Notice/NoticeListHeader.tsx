'use client';

import { useState } from 'react';
import Filter from '@/features/Filter/Filter';
import SortButtonList from './SortButtonList';
import SortSelect from '@/features/Sort/SortSelect';

interface Props {
  itemList: Notice[];
  updateItemList: (sortedList: Notice[]) => void;
}

const NoticeListHeader = ({ itemList, updateItemList }: Props) => {
  const [isToggleSort, setIsToggleSort] = useState(false);
  const [isToggleFilter, setIsToggleFilter] = useState(false);
  const [sortCategory, setSortCategory] = useState('마감임박순');

  const handleToggleSort = () => {
    if (isToggleFilter) {
      setIsToggleFilter(false);
    }
    setIsToggleSort(prev => !prev);
  };

  const handleToggleFilter = () => {
    if (isToggleSort) {
      setIsToggleSort(false);
    }
    setIsToggleFilter(prev => !prev);
  };

  const updateSortCategory = (value: string) => {
    setSortCategory(value);
  };

  return (
    <div className='flex gap-[10px]'>
      <div className='relative flex flex-col gap-[8px]'>
        <SortSelect
          sortCategory={sortCategory}
          handleToggle={handleToggleSort}
        />
        {isToggleSort ? (
          <SortButtonList
            itemList={itemList}
            updateItemList={updateItemList}
            updateSortCategory={updateSortCategory}
            handleToggleSort={handleToggleSort}
          />
        ) : null}
      </div>
      <div className='md:relative'>
        <button
          type='button'
          className='flex h-[30px] items-center rounded-[5px] bg-pt-green30 p-[12px] text-[14px] font-bold text-white'
          onClick={handleToggleFilter}
        >
          상세 필터
        </button>
        {isToggleFilter ? <Filter handleToggle={handleToggleFilter} /> : null}
      </div>
    </div>
  );
};

export default NoticeListHeader;
