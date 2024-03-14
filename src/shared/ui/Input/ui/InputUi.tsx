import { ChangeEvent, ForwardedRef, forwardRef } from 'react';
import { InputInterface, ValidInterface } from '@/shared/ui/Input/type';

const InputUi = forwardRef(
  (
    {
      type,
      title,
      defaultValue,
      isPassword,
      addition,
      valid,
      isValid,
      onChange,
    }: ValidInterface &
      Omit<InputInterface, 'onChange'> & {
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
      },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className='flex-start flex w-full flex-col justify-start gap-2'>
        {type === 'input' && (
          <div className='text-base font-normal leading-[26px]'>{title}</div>
        )}
        <div className='relative w-full'>
          <input
            type={isPassword ? 'password' : 'text'}
            placeholder={type === 'input' ? '입력' : title}
            defaultValue={defaultValue}
            onChange={onChange}
            ref={ref}
            className='h-[58px] w-full rounded-[5px] border border-solid border-[#cbc9cf] px-5 py-4 text-base font-normal leading-[26px] text-black placeholder:text-[#a4a1aa]'
          />
          {addition && (
            <span className='translateY-50 absolute right-5 top-2/4 text-base font-normal leading-[26px]'>
              {addition}
            </span>
          )}
        </div>
        {isValid && (
          <div className='ml-2 text-xs font-normal leading-4 text-[#ff4040]'>
            {valid}
          </div>
        )}
      </div>
    );
  },
);

export default InputUi;
