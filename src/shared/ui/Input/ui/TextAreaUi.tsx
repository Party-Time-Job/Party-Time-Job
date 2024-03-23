import { ChangeEvent, ForwardedRef, forwardRef } from 'react';
import { InputInterface, ValidInterface } from '@/shared/ui/Input/type';

const TextAreaUi = forwardRef(
  (
    {
      type,
      title,
      defaultValue,
      isRequired,
      valid,
      isValid,
      onChange,
    }: ValidInterface &
      Omit<InputInterface, 'onChange'> & {
        onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
      },
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <div className='flex-start flex flex-col justify-start gap-2'>
        {type === 'description' && (
          <div className='text-base font-normal leading-[26px]'>{title}</div>
        )}
        <textarea
          placeholder={type === 'description' ? '입력' : title}
          defaultValue={defaultValue}
          required={isRequired}
          onChange={
            onChange as (event: ChangeEvent<HTMLTextAreaElement>) => void
          }
          ref={ref}
          className='h-[153px] w-full resize-none rounded-[5px] bg-test-black px-5 py-4 text-base font-normal leading-[26px] text-white placeholder:text-white'
        />
        {isValid && (
          <div className='ml-2 text-xs font-normal leading-4 text-[#ff4040]'>
            {valid}
          </div>
        )}
      </div>
    );
  },
);

export default TextAreaUi;
