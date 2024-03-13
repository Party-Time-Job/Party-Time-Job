import React, { ForwardedRef } from 'react';

export interface SelectUiInterface {
  type: 'search' | 'filter';
  title?: string;
  isOpen: boolean;
  ref: ForwardedRef<HTMLDivElement>;
  dropDown: () => void;
  onClick: (value: string) => void;
  children: React.ReactNode;
}
