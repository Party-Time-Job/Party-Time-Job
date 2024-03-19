'use client';

import { useEffect, useState } from 'react';
import EmployerNoticeDetail from '@/entities/Employer/EmployerNoticeDetail.tsx';
import { StoreTable } from '@/shared/ui/Table/Table.tsx';
import { StoreInterface } from '@/shared/ui/Table/type.ts';

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
}

const EmployerNoticeDetailPage = ({
  shopId,
  noticeId,
}: {
  shopId: string;
  noticeId: string;
}) => {
  const [applications, setApplications] = useState<StoreInterface[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(
          `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}/applications`,
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
  }, [shopId, noticeId]);

  return (
    <main className='flex flex-col items-center justify-center bg-pt-gray10'>
      <EmployerNoticeDetail shopId={shopId} noticeId={noticeId} />
      <StoreTable
        page={1}
        shopId={shopId}
        noticeId={noticeId}
        data={applications}
        pagination={null}
      />
    </main>
  );
};

export default EmployerNoticeDetailPage;
