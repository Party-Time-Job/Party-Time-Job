'use client';

import NoticeDetail from '@/entities/Notice/NoticeDetail';
import NoticeList from '@/entities/Notice/NoticeList';
import useNoticeDetail from './hooks/useNoticeDetail.ts';

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
  const { recentNoticeList, userInfo } = useNoticeDetail();

  return (
    <main className='flex flex-col items-center justify-center'>
      <NoticeDetail shopId={shopId} noticeId={noticeId} userInfo={userInfo} />
      <NoticeList category='recent' recentNoticeList={recentNoticeList} />
    </main>
  );
};

export default NoticeDetailPage;
