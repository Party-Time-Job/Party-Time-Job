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

  const setModalComment = () => {
    if (category === 'noProfile') {
      return '내 프로필을 먼저 등록해 주세요.';
    }
    if (category === 'cancel') {
      return '신청을 취소하시겠어요?';
    }
    if (category === 'noLogin') {
      return '로그인을 해주세요.';
    }
    if (category === 'success') {
      return '성공적으로 공고에 지원했습니다.';
    }
    return '';
  };

  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleToggle();
    }
  };

  const handleConfirm = () => {
    if (category === 'noProfile') {
      router.push('/profile');
    }
    if (category === 'noLogin') {
      router.push('/login');
    }
    if (category === 'success') {
      handleToggle();
    }
  };

  return (
    <div
      onClick={handleClickOutside}
      className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-70'
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
            {setModalComment()}
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
