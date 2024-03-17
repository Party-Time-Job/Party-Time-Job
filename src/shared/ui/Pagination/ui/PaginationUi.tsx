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
    <div>
      <div>
        <Link href={`${url}${page - 1}`}>
          <ArrowUi isActive={isPrevious} direction='previous' />
        </Link>
        <div>
          {showed.map(num => (
            <Link key={num} href={`${url}${num}`}>
              <span>{num}</span>
            </Link>
          ))}
        </div>
        <Link href={`${url}${page + 1}`}>
          <ArrowUi isActive={isNext} direction='next' />
        </Link>
      </div>
    </div>
  );
};

export default PaginationUi;
