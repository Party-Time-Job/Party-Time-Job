import EmployerNoticeDetailPage from '@/pages/EmployerPage/EmployerNoticeDetailPage';

const page = async ({
  params: { shopId, noticeId },
}: {
  params: { shopId: string; noticeId: string };
}) => {
  return <EmployerNoticeDetailPage shopId={shopId} noticeId={noticeId} />;
};

export default page;
