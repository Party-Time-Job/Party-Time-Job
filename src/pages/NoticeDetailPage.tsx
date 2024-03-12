import NoticeDetail from '@/widgets/NoticeDetail';

const NoticeDetailPage = ({
  shopId,
  noticeId,
}: {
  shopId: string;
  noticeId: string;
}) => {
  return (
    <main className='bg-pt-gray10'>
      <NoticeDetail shopId={shopId} noticeId={noticeId} />
    </main>
  );
};

export default NoticeDetailPage;
