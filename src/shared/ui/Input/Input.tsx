/* eslint-disable consistent-return */
import { forwardRef, ForwardedRef, ChangeEvent } from 'react';
import { InputProps } from '@/shared/ui/Input/type';
import InputUi from './ui/InputUi';
import TextAreaUi from './ui/TextAreaUi';

/**
 * @param {'input' | 'description'} type 타입에 따라 InputElement와 TextAreaElement로 분리
 * @param {string} title 인풋에 해당하는 제목
 * @param {string} defaultValue 초기값 설정(인풋에 필요한 초기값을 세팅 -> 선택)
 * @param {boolean} isPassword 비밀번호 인풋에 해당
 * @param {boolean} isRequired 필수로 채워야 하는지 여부 파악
 * @param {string} addition 인풋에 추가로 입력되는 값(ex. 단위 -> 선택)
 * @param {string} valid 인풋 텍스트 내 유효성 검사
 * @param {boolean} isValid 유효한지 여부 파악
 * @param {function} onChange 값이 변경되었을 떄 실행할 함수(선택)
 * @return 인풋 텍스트
 */

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
