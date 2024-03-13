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
      <div>
        {type === 'input' && <div>{title}</div>}
        <div>
          <input
            type={isPassword ? 'password' : 'text'}
            placeholder={type === 'input' ? '입력' : title}
            defaultValue={defaultValue}
            onChange={onChange}
            ref={ref}
          />
          {addition && <span>{addition}</span>}
        </div>
        {isValid && <div>{valid}</div>}
      </div>
    );
  },
);

export default InputUi;
