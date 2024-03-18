'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

const Modal = ({
  handleToggle,
  category,
}: {
  handleToggle: () => void;
  category: string;
}) => {
  const router = useRouter();

  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleToggle();
    }
  };

  const handleConfirm = () => {
    router.push('/profile');
  };
  return (
    <div
      onClick={handleClickOutside}
      className=' absolute inset-0 flex items-center justify-center bg-black bg-opacity-70'
    >
      <div className='flex flex-col items-center gap-[32px] rounded-[12px] bg-white p-[24px]'>
        <div className='flex flex-col items-center gap-[16px]'>
          <div>
            <Image
              src={'/modal-alert.svg'}
              alt='alert'
              width={24}
              height={24}
            />
          </div>
          <span className='w-[250px] text-center leading-[26px]'>
            {category === 'noProfile'
              ? '내 프로필을 먼저 등록해 주세요.'
              : '신청을 취소하시겠어요?'}
          </span>
        </div>
        <button
          onClick={handleConfirm}
          className='flex w-[80px] items-center justify-center rounded-[6px] border-[1px] border-pt-primary px-[20px] py-[10px] text-[14px] font-bold text-pt-primary'
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Modal;
