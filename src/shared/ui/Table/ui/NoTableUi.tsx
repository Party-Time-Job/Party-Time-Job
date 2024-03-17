'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { UserType } from '@/shared/ui/Table/type';

const TEXT_PER_TYPE = {
  message: '데이터를 찾지 못했습니다...',
  noData: {
    employee: '신청 내역이 없습니다.',
    employer: '신청한 사람이 없습니다.',
  },
};

const NoTableUi = ({
  message = true,
  userType,
}: {
  message?: boolean;
  userType: UserType;
}) => {
  const pathName = usePathname();

  return (
    <div className='flex h-[400px] w-full flex-col items-center justify-center gap-5 text-xl text-[#7d7986]'>
      <span>
        {message ? TEXT_PER_TYPE.message : TEXT_PER_TYPE.noData[userType]}
      </span>
      {message && (
        <Link href={`${pathName}?page=1`}>첫 번째 페이지로 이동</Link>
      )}
    </div>
  );
};

export default NoTableUi;
