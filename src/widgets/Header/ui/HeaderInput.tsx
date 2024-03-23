'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

const HeaderInput = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const updateSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: KeyboardEvent) => {
    if (!searchValue) {
      return;
    }
    if (e.key === 'Enter') {
      router.push(`/search?keyword=${searchValue}`);
    }
  };
  return (
    <div className='relative'>
      <input
        placeholder='가게 이름으로 찾아보세요'
        className='h-8 w-[344px] rounded-md bg-test-black pl-10 text-xs lg:w-[450px]'
        value={searchValue}
        onChange={e => updateSearchValue(e)}
        onKeyDown={e => handleSubmit(e)}
        required
      />
      <img
        src='/search.svg'
        alt='검색'
        className='absolute left-2 top-1/2 -translate-y-1/2 transform'
      />
    </div>
  );
};

export default HeaderInput;
