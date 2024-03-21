'use client';

import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Link from 'next/link';
import Post from '../Post/Post';
import { AllNotice, Notice, User } from '../Post/types.ts';
import { getMethod } from '@/shared/api/RequestMethod.ts';
import getUserToken from '@/pages/NoticeDetailPage/utils/getUserToken.ts';
import { DecodedToken } from '@/widgets/Header/Type.ts';

/**
 * @returns '/notice' 의 맞춤 공고 영역
 */
const CustomNotice = () => {
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

  return (
    <section className='flex w-full items-start justify-center bg-pt-green10 px-[12px] py-[40px] md:px-[32px] md:py-[60px]'>
      <div className='flex w-full flex-col gap-4 md:gap-8 lg:w-[971px]'>
        <span className='text-[20px] font-bold leading-6 md:text-[28px]'>
          맞춤 공고
        </span>
        <div className='inline-flex w-full items-start gap-1 overflow-x-scroll scrollbar-hide md:gap-[14px]'>
          {customNotice?.map(notice => {
            return (
              <Link
                key={notice.item.id}
                href={`/detail/${notice.item.shop.item.id}/${notice.item.id}`}
              >
                <Post key={notice.item.id} noticeItem={notice.item} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomNotice;
