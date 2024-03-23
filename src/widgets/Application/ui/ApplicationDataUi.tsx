'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Button from '@/shared/ui/Button';
import Title from '@/shared/ui/Title';
import NoProfileRegister from '@/widgets/NoProfile/NoProfileRegister';

export const NoApplicationDataUi = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/notice');
  };

  return (
    <div className='mt-10 border-t border-gray-600 pb-[60px]'>
      <Title title='신청 내역' size={18} gap={22}>
        <NoProfileRegister
          text='아직 신청 내역이 없습니다.'
          button={
            <div className='w-auto sm:w-[346px]'>
              <Button
                text='공고 보러가기'
                size='large'
                status='active'
                onClick={handleClick}
              />
            </div>
          }
        />
      </Title>
    </div>
  );
};

export const ApplicationDataUi = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='mt-10 border-t border-gray-600 pb-[60px]'>
      <Title title='신청 내역' size={18} gap={22}>
        {children}
      </Title>
    </div>
  );
};
