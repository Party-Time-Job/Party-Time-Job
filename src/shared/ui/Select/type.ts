import React, { ForwardedRef } from 'react';

export interface Option {
  value: string;
}

export interface Options {
  options: Option[];
}

export interface SelectUiInterface {
  type: 'search' | 'filter';
  title?: string;
  isOpen: boolean;
  ref: ForwardedRef<HTMLDivElement>;
  dropDown: () => void;
  onClick: (value: string) => void;
  children: React.ReactNode;
}
