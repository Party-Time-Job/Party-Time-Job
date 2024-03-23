'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

interface Props {
  handleToggle: () => void;
  category: string;
  cancelClick: () => void;
}

const Modal = ({ handleToggle, category, cancelClick }: Props) => {
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
    if (category === 'canceled') {
      return '정상적으로 취소되었습니다.';
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
      window.location.reload();
    }
    if (category === 'canceled') {
      handleToggle();
      window.location.reload();
    }
  };

  const handleNoClick = () => {
    handleToggle();
  };

  const handleCancelClick = () => {
    cancelClick();
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
          <span className='w-[250px] text-center leading-[26px] text-white'>
            {setModalComment()}
          </span>
        </div>
        {category === 'cancel' ? (
          <div className='flex items-start gap-[8px]'>
            <button
              onClick={handleNoClick}
              className='flex items-center justify-center rounded-[6px] bg-test-green px-[20px] py-[10px] text-[14px] font-bold text-black'
            >
              아니오
            </button>
            <button
              onClick={handleCancelClick}
              className='flex items-center justify-center rounded-[6px]  bg-test-green px-[20px] py-[10px] text-[14px] font-bold text-black'
            >
              취소하기
            </button>
          </div>
        ) : (
          <button
            onClick={handleConfirm}
            className='flex w-[80px] items-center justify-center rounded-[6px] bg-test-green px-[20px] py-[10px] text-[14px] font-bold text-black'
          >
            확인
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
