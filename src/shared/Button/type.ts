import React from 'react';

export interface ButtonInterface {
  text: string;
  type?: 'button' | 'submit';
  confirm?: boolean;
  size: 'large' | 'medium' | 'mediumSmall' | 'small';
  status: 'active' | 'inactive';
  onClick?: () => void;
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type OmitButton = Omit<ButtonInterface, 'confirm' | 'status'>;
