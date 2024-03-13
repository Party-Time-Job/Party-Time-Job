'use client';

import { useState } from 'react';
import Filter from '@/features/Filter/Filter';

const NoticeListHeader = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(prev => !prev);
  };
  return (
    <div className='flex gap-[10px]'>
      <button type='button'>마감임박순</button>
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
