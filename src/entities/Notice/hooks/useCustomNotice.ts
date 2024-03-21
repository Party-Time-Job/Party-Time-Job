import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { AllNotice, Notice, User } from '@/entities/Post/types';
import getUserToken from '@/pages/NoticeDetailPage/utils/getUserToken';
import { getMethod } from '@/shared/api/RequestMethod';
import { DecodedToken } from '@/widgets/Header/Type';

const useCustomNotice = () => {
  const [customNotice, setCustomNotice] = useState<Notice[]>();
  const token = getUserToken();

  useEffect(() => {
    if (token) {
      const decoded: DecodedToken = jwtDecode(token);
      const { userId } = decoded;

      const getData = async () => {
        const allNotice = await getMethod<AllNotice>('/notices');
        const userInfo = await getMethod<User>(`/users/${userId}`);
        const userAddress = userInfo.item.address;
        const allNoticeList = allNotice.items;
        const userCustomNoticeList = allNoticeList.filter(notice => {
          return notice.item.shop.item.address1 === userAddress;
        });
        if (!userAddress || userCustomNoticeList.length === 0) {
          setCustomNotice(allNoticeList);
          return;
        }
        setCustomNotice(userCustomNoticeList);
      };
      getData();
    } else {
      const getData = async () => {
        const allNotice = await getMethod<AllNotice>('/notices');
        setCustomNotice(allNotice.items);
      };
      getData();
    }
  }, []);

  return customNotice;
};
export default useCustomNotice;