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
  const [selected, setSelected] = useState(defaultValue || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
    setFindOptions('');
  };

  const handleSelect = (value: string) => {
    setFindOptions(value);
    setIsOpen(false);
    if (onClick) {
      onClick(value);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (onChange) {
      onChange(event as ChangeEvent<HTMLInputElement>);
    }
    setSelected(inputValue);
    setFindOptions(inputValue);
    setIsOpen(true);
  };

  const filtered = options.filter(option =>
    option.value.toLowerCase().includes(findOptions.toLowerCase()),
  );

  return {
    isOpen,
    findOptions,
    selected,
    dropdownRef,
    filtered,
    toggle,
    onClick: handleSelect,
    onChange: handleChange,
  };
};

export default useSelect;
