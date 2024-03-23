'use client';

import { useEffect, useState } from 'react';
import { ReadonlyURLSearchParams } from 'next/navigation';
import EmployerNoticeDetail from '@/entities/Employer/EmployerNoticeDetail.tsx';
import { StoreTable } from '@/shared/ui/Table/Table.tsx';
import { StoreInterface } from '@/shared/ui/Table/type.ts';
import Pagination from '@/shared/ui/Pagination/Pagination';

interface ApplicationItem {
  id: string;
  status: string;
  user: {
    item: {
      name: string;
      bio: string;
      phone: string;
    };
  };
}

interface ApplicationResponse {
  items: Array<{ item: ApplicationItem }>;
  length: number;
  count: number;
}

const EmployerNoticeDetailPage = ({
  shopId,
  noticeId,
  searchParams,
}: {
  shopId: string;
  noticeId: string;
  searchParams: ReadonlyURLSearchParams | null;
}) => {
  const [applications, setApplications] = useState<StoreInterface[]>([]);
  const [total, setTotal] = useState<number>(0);
  const MAX_ITEMS = 5;

  const currentPage = searchParams
    ? parseInt(searchParams.get('page') ?? '1', 10)
    : 1;

  useEffect(() => {
    const fetchApplications = async () => {
      const offset = (currentPage - 1) * MAX_ITEMS;
      try {
        const response = await fetch(
          `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}/applications?limit=${MAX_ITEMS}&offset=${offset}`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch applications');
        }
        const data = (await response.json()) as ApplicationResponse;

        // API 응답을 StoreTable 컴포넌트에서 사용할 형식으로 변환
        const formattedData = data.items.map(({ item }) => ({
          id: item.id,
          status: item.status as
            | 'pending'
            | 'canceled'
            | 'accepted'
            | 'rejected',
          name: item.user.item.name,
          bio: item.user.item.bio,
          phone: item.user.item.phone,
        }));
        setTotal(data.count);
        setApplications(formattedData);
      } catch (error) {
        console.error(
          '애플리케이션 데이터를 불러오는 중에 문제가 발생했습니다',
          error,
        );
      } finally {
        //
      }
    };

    fetchApplications();
  }, [shopId, noticeId, searchParams]);

  return (
    <main className='flex flex-col items-center justify-center bg-pt-gray10'>
      <EmployerNoticeDetail shopId={shopId} noticeId={noticeId} />
      <StoreTable
        shopId={shopId}
        noticeId={noticeId}
        data={applications}
        pagination={
          <Pagination
            page={currentPage}
            total={total}
            showedItems={MAX_ITEMS}
          />
        }
      />
    </main>
  );
};

export default EmployerNoticeDetailPage;
