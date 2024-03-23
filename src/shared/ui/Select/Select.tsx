'use client';

import { ForwardedRef, forwardRef } from 'react';
import { SelectInterface } from '@/shared/ui/Select/type';
import useSelect from '@/shared/hooks/useSelect';
import SelectUi from './ui/SelectUi';
import SelectDropdownUi from './ui/SelectDropdownUi';

/**
 * @param {'search' | 'filter'} type 단순 배열 나열 또는 분류
 * @param {string} title 인풋 타이틀
 * @param {string} defaultValue 초기값 설정(인풋에 필요한 초기값을 세팅 -> 선택)
 * @param {boolean} isRequired 필수로 채워야 하는지 여부 파악
 * @param {Array} options 드롭다운 나열 옵션들
 * @param {function} onClick 드롭다운 옵션 선택 이벤트 핸들러
 * @param {function} onChange 드롭다운 선택 업데이트
 * @return 드롭다운 Select 인풋 박스
 */

const Select = forwardRef(
  (props: SelectInterface, ref: ForwardedRef<HTMLInputElement>) => {
    const { type, title, isRequired } = props;
    const {
      isOpen,
      selectedOptions,
      dropdownRef,
      filtered,
      toggleDown,
      onClickSelect,
      onChangeInput,
    } = useSelect(props);

    return (
      <SelectUi
        type={type}
        title={title}
        isOpen={isOpen}
        options={filtered}
        dropDown={toggleDown}
        onClick={onClickSelect}
        ref={dropdownRef}
      >
        <SelectDropdownUi
          type={type}
          isOpen={isOpen}
          isRequired={isRequired}
          selected={selectedOptions}
          onChange={onChangeInput}
          ref={ref}
        />
      </SelectUi>
    );
  },
);

export default Select;
