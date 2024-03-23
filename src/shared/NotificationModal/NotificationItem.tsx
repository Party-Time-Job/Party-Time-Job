import { NotificationItemInterface } from '@/shared/NotificationModal/type';
import calculateTime from '@/shared/utils/calculateTime';

/**
 *
 * @param {string} id 알림 모달 내용 아이디
 * @param {string} name 공고 가게 이름
 * @param {string} duration 공고 모집 기간
 * @param {string} createdAt 생성 날짜
 * @param {function} onClick 알림 모달 내 내용 클릭 이벤트 핸들러
 * @returns 알림 공고 accepted 또는 rejected 내용
 */

export const AcceptedItem = ({
  id,
  name,
  duration,
  createdAt,
  onClick,
}: NotificationItemInterface) => {
  const timeDifference = calculateTime(createdAt);

  return (
    <button
      type='button'
      onClick={() => onClick(id)}
      className='flex w-[238px] flex-col items-start justify-start gap-[4px] rounded-[5px] border border-gray-500 px-[12px] py-[16px] text-start'
    >
      <div className='h-[5px] w-[5px] rounded-[70px] bg-[#0080ff]'></div>
      <p className='text-sm font-normal text-white'>
        {name}({duration}) 공고 지원이{' '}
        <span className='text-[#0080ff]'>승인</span>되었어요.
      </p>
      <span className='text-xs font-normal text-[#a4a1aa]'>
        {timeDifference}
      </span>
    </button>
  );
};

export const RejectedItem = ({
  id,
  name,
  duration,
  createdAt,
  onClick,
}: NotificationItemInterface) => {
  const timeDifference = calculateTime(createdAt);

  return (
    <button
      type='button'
      onClick={() => onClick(id)}
      className='flex w-[238px] flex-col items-start justify-start gap-[4px] rounded-[5px] border border-gray-500 px-[12px] py-[16px] text-start'
    >
      <div className='h-[5px] w-[5px] rounded-[70px] bg-[#ff4040]'></div>
      <p className='text-sm font-normal text-white'>
        {name}({duration}) 공고 지원이{' '}
        <span className='text-[#ff4040]'>거절</span>되었어요.
      </p>
      <span className='text-xs font-normal text-[#a4a1aa]'>
        {timeDifference}
      </span>
    </button>
  );
};
