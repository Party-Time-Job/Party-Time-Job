import { ForwardedRef, forwardRef } from 'react';
import { Options, SelectUiInterface } from '@/shared/ui/Select/type';

export interface SelectUiExtendedInterface extends SelectUiInterface, Options {}

const SelectUi = forwardRef(
  (
    {
      type,
      title,
      isOpen = false,
      options,
      dropDown,
      onClick,
      children,
    }: SelectUiExtendedInterface,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className='z-10 w-full'>
        <div
          ref={ref}
          className='flex w-full flex-col items-start justify-start gap-2'
        >
          {type === 'search' && title && (
            <div className='text-base font-normal leading-[26px]'>{title}</div>
          )}
          <button type='button' onClick={dropDown} className='relative w-full'>
            {children}
          </button>
        </div>
        <div className='relative w-full'>
          <div className='relative'>
            {isOpen && (
              <ul className='absolute top-2 flex max-h-[230px] w-full flex-col items-center justify-start overflow-y-auto rounded-md border border-solid border-[#e5e4e7] bg-test-black shadow-md'>
                {options.map(option => (
                  <li
                    key={option.value}
                    className='h-fit w-full border-b border-gray-600 text-center'
                  >
                    <button
                      type='button'
                      onClick={() => onClick(option.value)}
                      className={`${type ? 'filter' : ''} h-full w-full px-0 py-3 text-sm font-normal leading-[22px] hover:text-black`}
                    >
                      {option.value}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  },
);

export default SelectUi;
