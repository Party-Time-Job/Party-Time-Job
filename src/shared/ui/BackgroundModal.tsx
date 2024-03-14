import Image from 'next/image';
import React from 'react';

/**
 * @param {number} size 버튼 크기 사이즈
 * @param {function} onClick 닫기 클릭 이벤트 핸들러
 * @param {ReactNode} children 안에 담겨질 내용
 * @return 닫기 백그라운드 레이아웃
 */

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
    <div className='fixed inset-0 w-full overflow-auto bg-[#fafafa]'>
      <div className='relative mx-auto my-0 max-w-[964px]'>
        <button
          type='button'
          onClick={onClick}
          className='absolute right-0 top-[60px] z-10'
        >
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
