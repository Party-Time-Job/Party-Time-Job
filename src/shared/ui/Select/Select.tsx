import { ForwardedRef, forwardRef } from 'react';
import { SelectInterface } from '@/shared/ui/Select/type';
import useSelect from '@/shared/hooks/useSelect';
import SelectUi from './ui/SelectUi';
import SelectDropdownUi from './ui/SelectDropdownUi';

const Select = forwardRef(
  (props: SelectInterface, ref: ForwardedRef<HTMLInputElement>) => {
    const { type, title, isRequired } = props;
    const {
      isOpen,
      selected,
      dropdownRef,
      filtered,
      toggle,
      onClick,
      onChange,
    } = useSelect(props);

    return (
      <SelectUi
        type={type}
        title={title}
        isOpen={isOpen}
        options={filtered}
        dropDown={toggle}
        onClick={onClick}
        ref={dropdownRef}
      >
        <SelectDropdownUi
          type={type}
          isOpen={isOpen}
          isRequired={isRequired}
          selected={selected}
          onChange={onChange}
          ref={ref}
        />
      </SelectUi>
    );
  },
);

export default Select;
