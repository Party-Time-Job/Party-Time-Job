import Image from 'next/image';
import React from 'react';

export interface BackgroundModalInterface {
  size?: number;
  onClick?: () => void;
  children: React.ReactNode;
}

const BackgroundModal = ({
  size = 32,
  onClick,
  children,
}: BackgroundModalInterface) => {
  return (
    <div>
      <div>
        <button type='button' onClick={onClick}>
          <Image
            src='/close.svg'
            alt='닫기 아이콘'
            width={size}
            height={size}
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default BackgroundModal;
