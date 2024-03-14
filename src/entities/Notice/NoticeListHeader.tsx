'use client';

import { useState } from 'react';
import Filter from '@/features/Filter/Filter';
import SortButton from '@/features/Sort/SortButton';

interface Props {
  itemList: Notice[];
  updateItemList: (sortedList: Notice[]) => void;
}

const NoticeListHeader = ({ itemList, updateItemList }: Props) => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(prev => !prev);
  };
  return (
    <div className='flex gap-[10px]'>
      <SortButton
        category='마감임박순'
        updateItemList={updateItemList}
        itemList={itemList}
      />
      <SortButton
        category='시급많은순'
        updateItemList={updateItemList}
        itemList={itemList}
      />
      <SortButton
        category='시간적은순'
        updateItemList={updateItemList}
        itemList={itemList}
      />
      <SortButton
        category='가나다순'
        updateItemList={updateItemList}
        itemList={itemList}
      />
      <div className='md:relative'>
        <button
          type='button'
          className='flex h-[30px] items-center rounded-[5px] bg-pt-green30 p-[12px] text-[14px] font-bold text-white'
          onClick={handleToggle}
        >
          상세 필터
        </button>
        {isToggle ? <Filter handleToggle={handleToggle} /> : null}
      </div>
    </div>
  );
};

export default NoticeListHeader;
