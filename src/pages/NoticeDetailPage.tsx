import NoticeDetail from '@/widgets/NoticeDetail';
import NoticeList from '@/widgets/NoticeList';

// 임시로 만든 함수. '/public/data/mock.json' 에서 데이터를 가져옵니다.
const getNotice = async () => {
  const response = await fetch('http://localhost:3000/data/mock.json');
  const result: AllNotice = await response.json();
  const noticeItemList: Notice[] = result.items;
  return noticeItemList;
};

const NoticeDetailPage = async ({
  shopId,
  noticeId,
}: {
  shopId: string;
  noticeId: string;
}) => {
  const noticeItemList = await getNotice();
  return (
    <main className='flex flex-col items-center justify-center bg-pt-gray10'>
      <NoticeDetail shopId={shopId} noticeId={noticeId} />
      <NoticeList noticeItemList={noticeItemList} category='recent' />
    </main>
  );
};

export default NoticeDetailPage;
