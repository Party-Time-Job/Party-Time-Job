import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { getCookie } from 'cookies-next';
import { AllNotice, Notice, User } from '@/entities/Post/types';
import { getMethod } from '@/shared/api/RequestMethod';
import { DecodedToken } from '@/widgets/Header/Type';

const useCustomNotice = () => {
  const [customNotice, setCustomNotice] = useState<Notice[]>();
  const token = getCookie('token');
  useEffect(() => {
    if (token) {
      const decoded: DecodedToken = jwtDecode(token);
      const { userId } = decoded;

      const getData = async () => {
        const allNotice = await getMethod<AllNotice>('/notices?limit=100');
        const userInfo = await getMethod<User>(`/users/${userId}`);
        const userAddress = userInfo.item.address;
        const allNoticeList = allNotice.items;
        const userCustomNoticeList = allNoticeList.filter(notice => {
          return (
            notice.item.shop.item.address1 === userAddress &&
            new Date(notice.item.startsAt) > new Date() &&
            !notice.item.closed
          );
        });
        if (!userAddress || userCustomNoticeList.length === 0) {
          const allCustomNoticeList = allNotice.items.filter(notice => {
            return (
              new Date(notice.item.startsAt) > new Date() && !notice.item.closed
            );
          });
          setCustomNotice(allCustomNoticeList);
          return;
        }
        setCustomNotice(userCustomNoticeList);
      };
      getData();
    } else {
      const getData = async () => {
        const allNotice = await getMethod<AllNotice>('/notices?limit=100');
        const allCustomNoticeList = allNotice.items.filter(notice => {
          return (
            new Date(notice.item.startsAt) > new Date() && !notice.item.closed
          );
        });
        setCustomNotice(allCustomNoticeList);
      };
      getData();
    }
  }, []);
  return customNotice;
};
export default useCustomNotice;
