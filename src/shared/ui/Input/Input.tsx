/* eslint-disable consistent-return */
import { forwardRef, ForwardedRef, ChangeEvent } from 'react';
import { InputProps } from '@/shared/ui/Input/type';
import InputUi from './ui/InputUi';
import TextAreaUi from './ui/TextAreaUi';

const Input = forwardRef(
  (
    {
      type = 'input',
      title,
      defaultValue,
      isPassword,
      isRequired,
      addition,
      valid,
      isValid,
      onChange,
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (type === 'input') {
      return (
        <InputUi
          type={type}
          title={title}
          defaultValue={defaultValue}
          isPassword={isPassword}
          isRequired={isRequired}
          addition={addition}
          valid={valid as string}
          isValid={isValid as boolean}
          onChange={onChange as (event: ChangeEvent<HTMLInputElement>) => void}
          ref={ref as ForwardedRef<HTMLInputElement>}
        />
      );
    }
    if (type === 'description') {
      return (
        <TextAreaUi
          type={type}
          title={title}
          defaultValue={defaultValue}
          isRequired={isRequired}
          valid={valid as string}
          isValid={isValid as boolean}
          onChange={
            onChange as (event: ChangeEvent<HTMLTextAreaElement>) => void
          }
          ref={ref as ForwardedRef<HTMLTextAreaElement>}
        />
      );
    }
  },
);

export default Input;
