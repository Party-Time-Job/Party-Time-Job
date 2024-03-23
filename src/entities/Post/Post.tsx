'use client';

import Image from 'next/image';
import addWorkHours from '@/entities/Post/utils/getFinishTime';
import formatDateTime from '@/entities/Post/utils/formatDateTime';
import formatHourlyPay from '@/entities/Post/utils/formatHourlyPay';
import { NoticeItem } from './types.ts';
import ClosedNoticeImage from '@/shared/ui/ClosedNoticeImage.tsx';
import useNoticeStatus from '../Notice/hooks/useNoticeStatus.ts';

/**
 *
 * @param {NoticeItem} noticeItem notice.item 객체
 * @returns 사장님 페이지 -가게 정보 상세, 공고 리스트 페이지, 공고 상세 페이지에 쓰일 Post component
 */
export const Post = ({ noticeItem }: { noticeItem: NoticeItem }) => {
  const comparePriceRate = Math.round(
    (noticeItem.hourlyPay / noticeItem.shop.item.originalHourlyPay) * 100 - 100,
  );
  const finishTime = addWorkHours(noticeItem.startsAt, noticeItem.workhour);
  const shopId = noticeItem.shop.item.id;
  const noticeId = noticeItem.id;
  const { isOutDatedNotice, isClosed } = useNoticeStatus(shopId, noticeId);
  const disabledText = isOutDatedNotice || isClosed ? 'text-gray-500' : 'text-white';

  return (
    <div className='z-0 inline-flex w-[173px] flex-col items-start gap-3 rounded-xl border border-gray-500 bg-test-black p-3 transition-transform duration-300 hover:-translate-y-2 hover:shadow-md hover:shadow-test-green md:w-[314px] md:gap-5 md:p-4'>
      <div className='relative flex h-[84px] w-[147px] items-center justify-center overflow-hidden rounded-xl md:h-[160px] md:w-[280px]'>
        {isOutDatedNotice ? <ClosedNoticeImage text='지난 공고' /> : null}
        {isClosed ? <ClosedNoticeImage text={'마감 공고'} /> : null}
        <Image
          priority
          width={0}
          height={0}
          sizes='100vw'
          src={noticeItem.shop.item.imageUrl}
          alt='preview-image'
          className='rounded-xl'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className='flex flex-col items-start gap-3 self-stretch'>
        <div className='flex h-[86px] flex-col items-start gap-2'>
          <span
            className={`text-base font-bold md:text-[20px] md:leading-[24px] ${disabledText} line-clamp-1`}
          >
            {noticeItem.shop.item.name}
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
              className={`inline-block text-xs md:text-sm md:leading-[22px] ${isOutDatedNotice || isClosed ? 'text-gray-500' : 'text-white'}`}
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
              className={`text-xs md:text-sm md:leading-[22px] ${isOutDatedNotice || isClosed ? 'text-gray-500' : 'text-white'}`}
            >
              {noticeItem.shop.item.address1}
            </span>
          </div>
        </div>
        <div className='flex flex-col items-start self-stretch md:flex-row md:items-center md:justify-between'>
          <span
            className={`overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold leading-[22px] md:text-2xl ${disabledText} ${isOutDatedNotice || isClosed ? 'text-gray-500' : 'text-white'}`}
          >
            {formatHourlyPay(noticeItem.hourlyPay)}원
          </span>
          <div
            className={`flex md:h-9 md:items-center md:rounded-lg md:p-3  ${isOutDatedNotice || isClosed ? 'border border-gray-500 text-gray-500 md:bg-test-black ' : 'border border-test-green text-white md:bg-test-black'}`}
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
                  className={`h-4 w-4  md:h-5 md:w-5 ${isOutDatedNotice || isClosed ? 'fill-gray-500' : 'fill-white'}`}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
