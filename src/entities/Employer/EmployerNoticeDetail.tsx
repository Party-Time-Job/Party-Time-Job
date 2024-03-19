'use client';

import { useEffect, useState } from 'react';
import { getMethod } from '@/shared/api/RequestMethod.ts';
import { Notice } from '../Post/types.ts';
import EmployerDetailPost from '../Post/EmployerDetailPost.tsx';

const EmployerNoticeDetail = ({
  shopId,
  noticeId,
}: {
  shopId: string;
  noticeId: string;
}) => {
  const [detail, setDetail] = useState<Notice>();

  const getData = async () => {
    const data = await getMethod<Notice>(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}`,
    );
    setDetail(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className='flex w-full items-center justify-center px-[12px] py-[40px] md:px-[32px] md:py-[60px]'>
      <div className='flex w-full flex-col gap-4 lg:w-[964px]'>
        <div className='flex flex-col gap-2'>
          <span className='text-[14px] font-bold text-pt-green40 md:text-[16px] md:leading-[20px]'>
            {detail?.item.shop.item.category}
          </span>
          <span className='text-[20px] font-bold md:text-[28px]'>
            {detail?.item.shop.item.name}
          </span>
        </div>
        <div className='flex flex-col gap-3'>
          {detail ? <EmployerDetailPost notice={detail} /> : null}
          <div className='flex flex-col items-start gap-2 rounded-xl bg-pt-gray20 p-[20px] lg:p-[32px]'>
            <span className='text-[14px] font-bold md:text-[16px] md:leading-[20px]'>
              공고 설명
            </span>
            <p className='text-[14px] leading-[22px] md:text-[16px] md:leading-[26px]'>
              {detail?.item.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerNoticeDetail;
