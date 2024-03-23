'use client';

import Image from 'next/image';
import formatDateTime from '@/entities/Post/utils/formatDateTime';
import addWorkHours from '@/entities/Post/utils/getFinishTime';
import { Notice, User } from './types.ts';
import formatHourlyPay from './utils/formatHourlyPay.ts';
import Modal from '@/features/Modal/Modal.tsx';
import ClosedNoticeImage from '@/shared/ui/ClosedNoticeImage.tsx';
import useDetailPost from './hooks/useDetailPost.ts';

interface Props {
  notice: Notice;
  userInfo: User | undefined;
  shopId: string;
  noticeId: string;
  isApplied: boolean;
  token: string;
  applicationId: string;
  isOutDatedNotice: boolean;
  isClosed: boolean;
}

const DetailPost = ({
  notice,
  userInfo,
  shopId,
  noticeId,
  isApplied,
  token,
  applicationId,
  isOutDatedNotice,
  isClosed,
}: Props) => {
  const userType = userInfo?.item.type;
  const disableButton =
    userType === 'employer' || isOutDatedNotice || isClosed
      ? 'opacity-50 cursor-not-allowed bg-[#A4A1AA]'
      : '';

  const {
    isToggle,
    modalCategory,
    handleToggle,
    handleCancelToggle,
    handleApplyClick,
    cancelClick,
  } = useDetailPost(shopId, noticeId, applicationId, token, notice, userInfo);

  const comparePriceRate = Math.round(
    (notice.item.hourlyPay / notice.item.shop.item.originalHourlyPay) * 100 -
      100,
  );
  const finishTime = addWorkHours(notice.item.startsAt, notice.item.workhour);

  return (
    <div className='inline-flex flex-col items-start gap-3 rounded-xl bg-test-black p-5 md:gap-5 md:p-[24px] lg:flex-row lg:justify-between'>
      <div className='relative flex h-auto max-h-[250px] w-full items-center justify-center overflow-hidden rounded-[12px] md:max-h-[361px] lg:w-[509px]'>
        {isOutDatedNotice ? <ClosedNoticeImage text={'지난 공고'} /> : null}
        {isClosed ? <ClosedNoticeImage text={'마감 공고'} /> : null}
        <Image
          priority
          width={0}
          height={0}
          sizes='100vw'
          src={notice.item.shop.item.imageUrl}
          alt='preview-image'
          className='rounded-xl'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className='flex w-full flex-col items-start gap-6 lg:mt-4 lg:w-[346px] lg:justify-between'>
        <div className='flex flex-col gap-2 md:gap-3 lg:min-h-[272px]'>
          <div className='flex flex-col items-start gap-2'>
            <span className='text-[14px] font-bold text-white md:text-[16px]'>
              시급
            </span>
            <div className='flex items-center gap-1 md:gap-2'>
              <span className='text-[24px] font-bold leading-5 text-white md:text-[28px]'>
                {formatHourlyPay(notice.item.hourlyPay)}원
              </span>
              <div className='item-center ml-2 flex gap-[2px] rounded-md border border-test-green bg-test-black px-2 py-1 md:p-[10px]'>
                <span className='text-[12px] leading-4 text-white md:text-[14px] md:leading-[20px]'>
                  기존 시급보다 {comparePriceRate}%
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  className='h-4 w-4 fill-pt-green40 md:h-5 md:w-5 md:fill-white'
                >
                  <path
                    d='M12.5001 16.6668H7.50013V10.0001H3.4668L10.0001 3.4668L16.5335 10.0001H12.5001V16.6668Z'
                    className='h-4 w-4 fill-white md:h-5 md:w-5'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start gap-2 md:gap-3'>
            <div className='flex items-start gap-1.5 self-stretch  md:items-center'>
              <Image
                src={'/clock-icon.svg'}
                alt='icon'
                width={20}
                height={20}
                className='h-4 w-4 md:h-5 md:w-5'
              />
              <span className='text-xs text-pt-gray40 md:text-[16px] md:leading-[22px]'>
                {formatDateTime(notice.item.startsAt)}~{finishTime} (
                {notice.item.workhour}시간)
              </span>
            </div>
            <div className='flex items-start gap-1.5'>
              <Image
                src={'/location-icon.svg'}
                alt='icon'
                width={20}
                height={20}
                className='h-4 w-4 md:h-5 md:w-5'
              />
              <span className='text-xs text-pt-gray40 md:text-[16px] md:leading-[22px]'>
                {notice.item.shop.item.address1}
              </span>
            </div>
          </div>
          <div className='h-12 overflow-auto scrollbar-hide'>
            <p className='text-[14px] leading-[22px] text-white md:text-[16px] md:leading-[26px]'>
              {notice.item.shop.item.description}
            </p>
          </div>
        </div>
        {isApplied ? (
          <button
            className='flex w-full justify-center self-stretch rounded-[6px] bg-test-green py-[10px] text-[14px] font-bold text-black transition-all duration-300 hover:bg-test-blue hover:font-bold hover:text-black md:py-[14px] md:text-[16px] md:leading-[20px]'
            onClick={handleCancelToggle}
          >
            취소하기
          </button>
        ) : (
          <button
            className={`flex w-full justify-center self-stretch rounded-[6px] bg-test-green py-[10px] text-[14px] font-bold text-black transition-all duration-300 hover:bg-test-blue hover:font-bold hover:text-black md:py-[14px] md:text-[16px] md:leading-[20px] ${disableButton}`}
            onClick={handleApplyClick}
            disabled={userType === 'employer' || isOutDatedNotice || isClosed}
          >
            {userType === 'employer' || isOutDatedNotice || isClosed
              ? '신청 불가'
              : '신청 하기'}
          </button>
        )}
      </div>
      {isToggle ? (
        <Modal
          handleToggle={handleToggle}
          category={modalCategory}
          cancelClick={cancelClick}
        />
      ) : null}
    </div>
  );
};

export default DetailPost;
