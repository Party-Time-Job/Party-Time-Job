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
    <div className='flex items-center justify-center'>
      <div className='mb-3 mt-3 flex items-center justify-center gap-5'>
        <Link
          href={`${url}${page - 1}`}
          className={`${isPrevious ? '' : 'pointer-events-none cursor-default'}`}
        >
          <ArrowUi isActive={isPrevious} direction='previous' />
        </Link>
        <div className='flex items-center justify-center gap-1 text-xs font-normal sm:gap-0.5 sm:text-sm '>
          {showed.map(num => (
            <Link
              key={num}
              href={`${url}${num}`}
              className={`${page === num ? 'pointer-events-none cursor-default' : ''}`}
            >
              <span
                className={`${page === num ? 'bg-[#395253] text-white' : ''} flex h-[32px] w-[32px] items-center justify-center rounded text-black sm:h-[40px] sm:w-[40px]`}
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
