'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ArrowUi from '@/shared/ui/Pagination/ui/ArrowUi';

const PaginationUi = ({
  page,
  showed,
  isPrevious,
  isNext,
}: {
  page: number;
  showed: number[];
  isPrevious: boolean;
  isNext: boolean;
}) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams ? (searchParams.get('search') as string) : '';
  const url = search
    ? `${pathName}?search=${search}&page=`
    : `${pathName}?page=`;

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='mb-3 mt-3 flex flex-col items-center justify-center gap-5'>
        <Link
          href={`${url}${page - 1}`}
          className={`${isPrevious ? '' : 'pointer-events-none cursor-default'}`}
        >
          <ArrowUi isActive={isPrevious} direction='previous' />
        </Link>
        <div className='flex flex-col items-center justify-center gap-0.5 text-sm font-normal  md:gap-1 md:text-xs md:font-normal'>
          {showed.map(num => (
            <Link
              key={num}
              href={`${url}${num}`}
              className={`${page === num ? '' : 'pointer-events-none cursor-default'}`}
            >
              <span
                className={`${page === num ? '' : 'bg-[#6b8a8c] text-white'} flex h-[40px] w-[40px] flex-col items-center justify-center rounded text-black md:h-[32px] md:w-[32px]`}
              >
                {num}
              </span>
            </Link>
          ))}
        </div>
        <Link
          href={`${url}${page + 1}`}
          className={`${isNext ? '' : 'pointer-events-none cursor-default'}`}
        >
          <ArrowUi isActive={isNext} direction='next' />
        </Link>
      </div>
    </div>
  );
};

export default PaginationUi;
