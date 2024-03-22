'use client';

import Image from 'next/image';
import addWorkHours from '@/entities/Post/utils/getFinishTime';
import formatDateTime from '@/entities/Post/utils/formatDateTime';
import formatHourlyPay from '@/entities/Post/utils/formatHourlyPay';
import { NoticeItem } from '../Post/types.ts';
import ClosedNoticeImage from '@/shared/ui/ClosedNoticeImage.tsx';
import useNoticeStatus from '../Notice/hooks/useNoticeStatus.ts';

/**
 *
 * @param {NoticeItem} noticeItem notice.item 객체
 * @returns 사장님 페이지 -가게 정보 상세, 공고 리스트 페이지, 공고 상세 페이지에 쓰일 Post component
 */
export const EmployerPost = ({
  imageUrl,
  noticeItem,
  originalHourlyPay,
  shopId,
  name,
  address1,
}: {
  imageUrl: string;
  originalHourlyPay: string;
  noticeItem: NoticeItem;
  shopId: string;
  name: string;
  address1: string;
}) => {
  const comparePriceRate = Math.round(
    (noticeItem.hourlyPay / Number(originalHourlyPay)) * 100 - 100,
  );
  const finishTime = addWorkHours(noticeItem.startsAt, noticeItem.workhour);
  const noticeId = noticeItem.id;
  const { isOutDatedNotice, isClosed } = useNoticeStatus(shopId, noticeId);
  const disabledText = isOutDatedNotice || isClosed ? 'text-[#CBC9CF]' : '';

  return (
    <div className='z-0 inline-flex flex-col items-start gap-3 rounded-xl border border-solid border-pt-gray20 bg-white p-3 md:gap-5 md:p-4'>
      <div className='relative flex h-[84px] w-[147px] items-center justify-center overflow-hidden rounded-xl md:h-[160px] md:w-[280px]'>
        {isOutDatedNotice ? <ClosedNoticeImage text='지난 공고' /> : null}
        {isClosed ? <ClosedNoticeImage text={'마감 공고'} /> : null}
        <Image
          priority
          width={0}
          height={0}
          sizes='100vw'
          src={imageUrl}
          alt='preview-image'
          className='rounded-xl'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className='flex flex-col items-start gap-4 self-stretch'>
        <div className='flex h-[84px] flex-col items-start gap-2'>
          <span
            className={`text-base font-bold leading-[20px] md:text-[20px] ${disabledText}`}
          >
            {name}
          </span>
          <div className='flex w-[147px] items-start gap-1.5 self-stretch md:w-[280px] md:items-center'>
            <Image
              src={`${isOutDatedNotice || isClosed ? '/disable-clock-icon.svg' : '/clock-icon.svg'}`}
              alt='icon'
              width={20}
              height={20}
              className='h-4 w-4 md:h-5 md:w-5'
            />
            <span
              className={`inline-block text-xs md:text-sm md:leading-[22px] ${isOutDatedNotice || isClosed ? 'text-[#CBC9CF]' : 'text-pt-gray40'}`}
            >
              {formatDateTime(noticeItem.startsAt)}~{finishTime} (
              {noticeItem.workhour}시간)
            </span>
          </div>
          <div className='flex items-start gap-1.5'>
            <Image
              src={`${isOutDatedNotice || isClosed ? '/disable-location-icon.svg' : '/location-icon.svg'}`}
              alt='icon'
              width={20}
              height={20}
              className='h-4 w-4 md:h-5 md:w-5'
            />
            <span
              className={`text-xs md:text-sm md:leading-[22px] ${isOutDatedNotice || isClosed ? 'text-[#CBC9CF]' : 'text-pt-gray40'}`}
            >
              {address1}
            </span>
          </div>
        </div>
        <div className='flex flex-col items-start self-stretch md:flex-row md:items-center md:justify-between'>
          <span
            className={`overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold leading-[22px] md:text-2xl ${disabledText}`}
          >
            {formatHourlyPay(noticeItem.hourlyPay)}원
          </span>
          <div
            className={`flex md:h-9 md:items-center md:rounded-[20px]  md:p-3 md:text-white ${isOutDatedNotice || isClosed ? 'text-[#CBC9CF] md:bg-[#CBC9CF]' : 'text-pt-green40 md:bg-pt-green40'}`}
          >
            <div className='flex items-center md:gap-0.5'>
              <span className='pt-0.5 text-sm font-bold leading-4'>
                기존 시급보다 {comparePriceRate}%
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                className='h-4 w-4 md:h-5 md:w-5 md:fill-white'
              >
                <path
                  d='M12.5001 16.6668H7.50013V10.0001H3.4668L10.0001 3.4668L16.5335 10.0001H12.5001V16.6668Z'
                  className={`h-4 w-4  md:h-5 md:w-5 md:fill-white ${isOutDatedNotice || isClosed ? 'fill-[#CBC9CF]' : 'fill-pt-green40'}`}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployerPost;
