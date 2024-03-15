/**
 * @param {string} width
 * 테일윈드 규칙으로 작성해주시면 됩니다. 기본값을 설정해 두었습니다.
 * @param {string} height
 * 테일윈드 규칙으로 작성해주시면 됩니다. 필수는 아닙니다.
 * @returns 사이즈에 맞는 인풋을 반환합니다.
 *
 * forwardRef를 사용하여 리액트 훅 폼의 register를 props로 받아 사용할 수 있도록 하였습니다.
 */

import { InputHTMLAttributes, forwardRef } from 'react';

interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  width?: string;
  height?: string;
  id?: string;
}

const Input = forwardRef<HTMLInputElement, InputComponentProps>(
  ({ className, width = 'w-80', height = '', ...rest }, ref) => {
    const inputClassName = `${width} ${height} ${className || ''} flex items-start gap-2 self-stretch rounded-md border bg-white px-4 py-5`;

    return <input {...rest} ref={ref} className={inputClassName} />;
  },
);

export default Input;
