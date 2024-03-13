import { Options, SelectUiInterface } from '@/shared/ui/Select/type';

const SelectUi = ({
  type,
  title,
  isOpen = false,
  ref,
  options,
  dropDown,
  onClick,
  children,
}: SelectUiInterface & Options) => {
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
            <ul className='absolute top-2 flex w-full max-w-[230px] flex-col items-center justify-start overflow-y-auto rounded-md border border-solid border-[#e5e4e7] bg-white shadow-md'>
              {options.map(option => (
                <li
                  key={option.value}
                  className='h-fit w-full border-b border-b-black text-center'
                >
                  <button
                    type='button'
                    onClick={() => onClick(option.value)}
                    className={`${type ? 'filter' : ''} h-full w-full px-0 py-3 text-sm font-normal leading-[22px]`}
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
};

export default SelectUi;
