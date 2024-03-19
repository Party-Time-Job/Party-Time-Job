'use client';

import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import NoticeDetail from '@/entities/Notice/NoticeDetail';
import NoticeList from '@/entities/Notice/NoticeList';
import getSavedNotice from '@/entities/Notice/utils/getSavedNotice';
import { Notice, User } from '@/entities/Post/types';
import { DecodedToken } from '@/widgets/Header/Type.ts';
import getUserToken from './utils/getUserToken.ts';
import { getMethod } from '@/shared/api/RequestMethod.ts';

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
  const [userInfo, setUserInfo] = useState<User>();

  useEffect(() => {
    const recent = getSavedNotice();
    setRecentNoticeList(recent);

    const token = getUserToken();

    if (token) {
      const decoded: DecodedToken = jwtDecode(token);
      const getUserInformation = async () => {
        const data = await getMethod<User>(
          `https://bootcamp-api.codeit.kr/api/3-2/the-julge/users/${decoded.userId}`,
        );
        setUserInfo(data);
      };
      getUserInformation();
    }
  }, []);

  return (
    <main className='flex flex-col items-center justify-center bg-pt-gray10'>
      <NoticeDetail shopId={shopId} noticeId={noticeId} userInfo={userInfo} />
      <NoticeList category='recent' recentNoticeList={recentNoticeList} />
    </main>
  );
};

export default NoticeDetailPage;
