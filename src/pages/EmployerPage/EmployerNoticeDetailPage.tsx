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

/**
 *
 * @param {string} shopId router params에서 받은 가게 id
 * @param {string} noticeId router params에서 받은 공고 id
 * @returns '/detail/[shopId]/[noticeId]' 에 랜더링 될 페이지 컴포넌트
 */
const EmployerNoticeDetailPage = ({
  shopId,
  noticeId,
}: {
  shopId: string;
  noticeId: string;
}) => {
  const [applications, setApplications] = useState<StoreInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}/applications`,
          {
            headers: {
              // 인증 헤더가 필요한 경우 여기에 추가
            },
          },
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
        console.error('Failed to load applications:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, [shopId, noticeId]);

  return (
    <main className='flex flex-col items-center justify-center bg-pt-gray10'>
      <EmployerNoticeDetail shopId={shopId} noticeId={noticeId} />
      {!isLoading && applications.length > 0 ? (
        <StoreTable page={1} data={applications} pagination={null} />
      ) : (
        <p>Loading applications or No applications found...</p>
      )}
    </main>
  );
};

export default EmployerNoticeDetailPage;
