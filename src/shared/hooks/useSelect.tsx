'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { SelectInterface } from '@/shared/ui/Select/type';

const useSelect = ({
  defaultValue,
  options,
  onClick,
  onChange,
}: SelectInterface) => {
  const [isOpen, setIsOpen] = useState(false);
  const [findOptions, setFindOptions] = useState(defaultValue || '');
  const [selectedOptions, setSelectedOptions] = useState(defaultValue || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutside);

    return () => {
      document.removeEventListener('click', handleOutside);
    };
  }, []);

  const toggleDown = () => {
    setIsOpen(!isOpen);
    setFindOptions('');
  };

  const handleSelect = (value: string) => {
    setSelectedOptions(value);
    setIsOpen(false);
    if (onClick) {
      onClick(value);
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (onChange) {
      onChange(event as ChangeEvent<HTMLInputElement>);
    }
    setSelectedOptions(inputValue);
    setFindOptions(inputValue);
    setIsOpen(true);
  };

  const filtered = options.filter(option =>
    option.value.toLowerCase().includes(findOptions.toLowerCase()),
  );

  return {
    isOpen,
    findOptions,
    selectedOptions,
    dropdownRef,
    filtered,
    toggleDown,
    onClickSelect: handleSelect,
    onChangeInput: handleInput,
  };
};

export default useSelect;
