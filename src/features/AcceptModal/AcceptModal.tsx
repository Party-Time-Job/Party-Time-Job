'use client';

import Image from 'next/image';
import { MouseEvent } from 'react';

interface Props {
  handleToggle: () => void;
  category: string;
  acceptClick: () => void;
}

const AcceptModal = ({ handleToggle, category, acceptClick }: Props) => {
  const setModalComment = () => {
    if (category === 'accept') {
      return '신청을 승인하시겠어요?';
    }
    return '';
  };

  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleToggle();
    }
  };

  const handleNoClick = () => {
    handleToggle();
  };

  const handleAcceptClick = () => {
    acceptClick();
    handleToggle();
  };

  return (
    <div
      onClick={handleClickOutside}
      className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-70'
    >
      <div className='flex flex-col items-center gap-[32px] rounded-[12px] bg-test-black p-[24px]'>
        <div className='flex flex-col items-center gap-[16px]'>
          <div>
            {category === 'cancel' ? (
              <Image
                src={'/modal-check.svg'}
                alt='alert'
                width={24}
                height={24}
              />
            ) : (
              <Image
                src={'/modal-alert.svg'}
                alt='alert'
                width={24}
                height={24}
              />
            )}
          </div>
          <span className='w-[250px] text-center leading-[26px]'>
            {setModalComment()}
          </span>
        </div>
        {category === 'accept' && (
          <div className='flex items-start gap-[8px]'>
            <button
              onClick={handleNoClick}
              className='flex items-center justify-center rounded-[6px] border-[1px] border-test-green px-[20px] py-[10px] text-[14px] font-bold text-white'
            >
              아니오
            </button>
            <button
              onClick={handleAcceptClick}
              className='flex items-center justify-center rounded-[6px] border-[1px] border-test-green bg-test-green px-[20px] py-[10px] text-[14px] font-bold text-black'
            >
              예
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcceptModal;
