import React from 'react';
import { Options } from '@/shared/ui/Select/type';

export interface InputInterface {
  type: string;
  title: string;
  defaultValue: string;
  isPassword?: boolean;
  isRequired?: boolean;
  addition?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export interface ValidInterface {
  valid: string;
  isValid: boolean;
}

export type Type = {
  type: 'input' | 'description';
};

// 한 곳에서 타입 제어
export type InputProps = Type &
  InputInterface &
  Partial<Options> &
  Partial<ValidInterface>;
