import { ForwardedRef, forwardRef } from 'react';
import Image from 'next/image';
import { SelectDropdownUiInterface } from '@/shared/ui/Select/type';

const SelectDropdownUi = forwardRef(
  (
    {
      type,
      isOpen = false,
      isRequired,
      selected,
      onChange,
    }: SelectDropdownUiInterface,
    ref: ForwardedRef<HTMLInputElement | HTMLDivElement>,
  ) => {
    return (
      <div>
        {type === 'search' ? (
          <div className='relative'>
            <input
              required={isRequired}
              value={selected}
              onChange={onChange}
              placeholder='선택'
              ref={ref as ForwardedRef<HTMLInputElement>}
              className='w-full rounded-[5px] border border-solid border-[#cbc9cf] px-5 py-4 text-left text-base font-normal leading-[26px] text-black placeholder:text-[#a4a1aa]'
            />
            <Image
              src={isOpen ? '/dropdown-up.svg' : '/dropdown.svg'}
              alt='드롭다운 아이콘'
              width={16}
              height={16}
              className={`${type ? 'search' : ''}`}
            />
          </div>
        ) : (
          <div
            ref={ref as ForwardedRef<HTMLDivElement>}
            className='flex h-fit w-full flex-row items-center justify-between rounded-[5px] bg-[#f2f2f3] px-3 py-[6.5px] text-center text-sm font-bold leading-[16.8px] text-black'
          >
            {selected}
            <Image
              src={isOpen ? '/dropdown-up.svg' : '/dropdown.svg'}
              alt='드롭다운 아이콘'
              width={16}
              height={16}
            />
          </div>
        )}
      </div>
    );
  },
);

export default SelectDropdownUi;
