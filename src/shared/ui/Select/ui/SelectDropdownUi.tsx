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
          <div>
            <input
              required={isRequired}
              value={selected}
              onChange={onChange}
              placeholder='선택'
              ref={ref as ForwardedRef<HTMLInputElement>}
            />
            <Image
              src={isOpen ? '/dropdown-up.svg' : '/dropdown.svg'}
              alt='드롭다운 아이콘'
              width={16}
              height={16}
            />
          </div>
        ) : (
          <div ref={ref as ForwardedRef<HTMLDivElement>}>
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
