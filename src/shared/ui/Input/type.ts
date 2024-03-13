import React from 'react';

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

export interface Option {
  value: string;
}

export interface Options {
  opitons: Option[];
}

// 한 곳에서 타입 제어
export type InputProps = Type &
  InputInterface &
  Partial<Options> &
  Partial<ValidInterface>;
