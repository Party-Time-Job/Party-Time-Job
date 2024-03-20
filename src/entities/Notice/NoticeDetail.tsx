'use client';

import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { getMethod } from '@/shared/api/RequestMethod.ts';
import DetailPost from '../Post/DetailPost';
import { AllApply, Notice, User } from '../Post/types.ts';
import { DecodedToken } from '@/widgets/Header/Type.ts';
import getUserToken from '@/pages/NoticeDetailPage/utils/getUserToken.ts';
import useOutDatedNotice from './hooks/useOutDatedNotice.ts';

/**
 * @param {Object} props - NoticeDetail 컴포넌트의 props
 * @param {string} props.shopId - router params에서 받은 가게 id
 * @param {string} props.noticeId - router params에서 받은 공고 id
 * @param {User} props.userInfo - router params에서 받은 유저 정보
 * @returns '/detail/[shopId]/[noticeId]' 에 랜더링 될 공고 상세 컴포넌트
 */
const NoticeDetail = ({
  shopId,
  noticeId,
  userInfo,
}: {
  shopId: string;
  noticeId: string;
  userInfo: User | undefined;
}) => {
  const [detail, setDetail] = useState<Notice>();
  const [isApplied, setIsApplied] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const isOutDatedNotice = useOutDatedNotice(shopId, noticeId);

  const token = getUserToken();

  const getData = async () => {
    const data = await getMethod<Notice>(
      `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}`,
    );
    setDetail(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (token) {
      const decoded: DecodedToken = jwtDecode(token);
      const { userId } = decoded;

      const testUserApplyList = async () => {
        const response = await getMethod<AllApply>(
          `https://bootcamp-api.codeit.kr/api/3-2/the-julge/shops/${shopId}/notices/${noticeId}/applications?limit=100`,
        );
        const userApply = response.items.filter(apply => {
          return userId === apply.item.user.item.id;
        });

        if (userApply.length !== 0 && userApply[0].item.status === 'pending') {
          setIsApplied(true);
          setApplicationId(userApply[0].item.id);
        }
      };
      testUserApplyList();
    }
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
          {detail ? (
            <DetailPost
              notice={detail}
              userInfo={userInfo}
              shopId={shopId}
              noticeId={noticeId}
              isApplied={isApplied}
              token={token}
              applicationId={applicationId}
              isOutDatedNotice={isOutDatedNotice}
            />
          ) : null}
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

export default NoticeDetail;
