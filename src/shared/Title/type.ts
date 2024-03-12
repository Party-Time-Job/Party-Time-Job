import React from 'react';

export interface TitleInterface {
  title: string;
  align?: 'start' | 'center';
  size?: number;
  subtitle?: string;
  subSize?: number;
  gap?: number;
  children: React.ReactNode;
}
