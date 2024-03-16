'use client';

import NoticeDetail from '@/entities/Notice/NoticeDetail';
import NoticeList from '@/entities/Notice/NoticeList';
import getSavedNotice from '@/entities/Notice/utils/getSavedNotice';

/**
 *
 * @param {string} shopId router params에서 받은 가게 id
 * @param {string} noticeId router params에서 받은 공고 id
 * @returns '/detail/[shopId]/[noticeId]' 에 랜더링 될 페이지 컴포넌트
 */
const NoticeDetailPage = ({
  shopId,
  noticeId,
}: {
  shopId: string;
  noticeId: string;
}) => {
  // 로컬 스토리지에서 최근 본 공고 리스트 불러와야함
  const recentNoticeList = getSavedNotice();
  return (
    <main className='flex flex-col items-center justify-center bg-pt-gray10'>
      <NoticeDetail shopId={shopId} noticeId={noticeId} />
      <NoticeList noticeItemList={recentNoticeList} category='recent' />
    </main>
  );
};

export default NoticeDetailPage;
