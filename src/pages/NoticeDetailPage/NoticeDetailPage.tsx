import NoticeDetail from '@/entities/Notice/NoticeDetail';
import NoticeList from '@/entities/Notice/NoticeList';

// 임시로 만든 함수. '/public/data/mock.json' 에서 데이터를 가져옵니다.
const getNotice = async () => {
  const response = await fetch('http://localhost:3000/data/mock.json');
  const result: AllNotice = await response.json();
  const noticeItemList: Notice[] = result.items;
  return noticeItemList;
};
/**
 *
 * @param {string} shopId router params에서 받은 가게 id
 * @param {string} noticeId router params에서 받은 공고 id
 * @returns '/detail/[shopId]/[noticeId]' 에 랜더링 될 페이지 컴포넌트
 */
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
