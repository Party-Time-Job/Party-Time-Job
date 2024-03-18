'use client';

import { useEffect, useState } from 'react';
import NoticeDetail from '@/entities/Notice/NoticeDetail';
import NoticeList from '@/entities/Notice/NoticeList';
import getSavedNotice from '@/entities/Notice/utils/getSavedNotice';
import { Notice } from '@/entities/Post/types';

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
  const [recentNoticeList, setRecentNoticeList] = useState<Notice[]>([]);

  useEffect(() => {
    const recent = getSavedNotice();
    setRecentNoticeList(recent);
  }, []);

  return (
    <main className='flex flex-col items-center justify-center bg-pt-gray10'>
      <NoticeDetail shopId={shopId} noticeId={noticeId} />
      <NoticeList noticeItemList={recentNoticeList} category='recent' />
    </main>
  );
};

export default NoticeDetailPage;
