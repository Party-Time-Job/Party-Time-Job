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
      <div>
        {type === 'description' && <div>{title}</div>}
        <textarea
          placeholder={type === 'description' ? '입력' : title}
          defaultValue={defaultValue}
          required={isRequired}
          onChange={
            onChange as (event: ChangeEvent<HTMLTextAreaElement>) => void
          }
          ref={ref}
        />
        {isValid && <div>{valid}</div>}
      </div>
    );
  },
);

export default TextAreaUi;
