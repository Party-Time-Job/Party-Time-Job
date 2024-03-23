'use client';

import { useSearchParams } from 'next/navigation';
import EmployerNoticeDetailPage from '@/page/EmployerPage/EmployerNoticeDetailPage';

const NoticeDetailPage = ({
  params: { shopId, noticeId },
}: {
  params: { shopId: string; noticeId: string };
}) => {
  const searchParams = useSearchParams();
  return (
    <EmployerNoticeDetailPage
      shopId={shopId}
      noticeId={noticeId}
      searchParams={searchParams}
    />
  );
};

export default NoticeDetailPage;
