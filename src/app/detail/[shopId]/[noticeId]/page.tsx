import NoticeDetailPage from '@/page/NoticeDetailPage/NoticeDetailPage';

const page = async ({
  params: { shopId, noticeId },
}: {
  params: { shopId: string; noticeId: string };
}) => {
  return <NoticeDetailPage shopId={shopId} noticeId={noticeId} />;
};

export default page;
