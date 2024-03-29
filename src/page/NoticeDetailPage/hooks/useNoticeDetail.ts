import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { getCookie } from 'cookies-next';
import { Notice, User } from '@/entities/Post/types';
import getSavedNotice from '@/entities/Notice/utils/getSavedNotice';
import { DecodedToken } from '@/widgets/Header/Type';
import { getMethod } from '@/shared/api/RequestMethod';

const useNoticeDetail = () => {
  const [recentNoticeList, setRecentNoticeList] = useState<Notice[]>([]);
  const [userInfo, setUserInfo] = useState<User>();

  useEffect(() => {
    const recent = getSavedNotice();
    setRecentNoticeList(recent);

    const token = getCookie('token');

    if (token) {
      const decoded: DecodedToken = jwtDecode(token);
      const getUserInformation = async () => {
        const data = await getMethod<User>(`/users/${decoded.userId}`);
        setUserInfo(data);
      };
      getUserInformation();
    }
  }, []);

  return { recentNoticeList, userInfo };
};

export default useNoticeDetail;
