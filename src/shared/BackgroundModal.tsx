import React from 'react';

export interface BackgroundModalInterface {
  size?: number;
  onClick?: () => void;
  children: React.ReactNode;
}
