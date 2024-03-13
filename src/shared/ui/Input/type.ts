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
