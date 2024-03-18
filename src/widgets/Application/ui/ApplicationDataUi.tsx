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
    <div className='bg-[#fafafa] pb-[60px]'>
      <Title title='신청 내역' size={28} gap={32}>
        <NoProfileRegister
          text='아직 신청 내역이 없습니다.'
          button={
            <div className='w-[346px] md:w-auto'>
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
    <div className='bg-[#fafafa] pb-[60px]'>
      <Title title='신청 내역' size={28} gap={32}>
        {children}
      </Title>
    </div>
  );
};
