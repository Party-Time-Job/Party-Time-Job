import Image from 'next/image';
import { NotificationModalInterface } from '@/shared/NotificationModal/type';
import {
  AcceptedItem,
  RejectedItem,
} from '@/shared/NotificationModal/NotificationItem';

/**
 *
 * @param {Array} items 알림 모달 안에 있는 내용(배열 데이터)
 * @param {function} onClose 알림 모달 닫는 이벤트 핸들러
 * @param {function} onClick 알림 모달 내 내용 클릭 이벤트 핸들러
 * @returns 알림 모달 창
 */

const NotifiactionModal = ({
  items,
  onClose,
  onClick,
}: NotificationModalInterface) => {
  const handleClose = () => {
    onClose();
  };

  const filteredItems = items.filter(
    item => item.result === 'accepted' || item.result === 'rejected',
  );

  return (
    <div className='absolute right-0 top-[12px] z-[1000] overflow-y-auto rounded-lg border border-gray-500 bg-test-black px-[20px] py-0 pb-[24px]'>
      <div className='sticky top-0 flex justify-between pb-[16px] pt-[24px]'>
        <h1 className='text-lg font-bold'>{`알림 ${filteredItems.length}개`}</h1>
        <button type='button' onClick={handleClose}>
          <Image src={'/close.svg'} alt='닫기 아이콘' width={24} height={24} />
        </button>
      </div>
      <div className='flex flex-col gap-[8px]'>
        {filteredItems.length === 0 && (
          <div className='flex h-[300px] flex-col items-center justify-center'>
            <span className='flex w-[238px] flex-col items-start justify-start gap-[4px] rounded-[5px] px-[12px] py-[16px] text-start'>
              알림이 없습니다!
            </span>
          </div>
        )}
        {filteredItems.map(item =>
          item.result === 'accepted' ? (
            <AcceptedItem
              key={item.id}
              id={item.id}
              name={item.name}
              duration={item.duration}
              createdAt={item.createdAt}
              onClick={() => onClick(item.id)}
            />
          ) : (
            <RejectedItem
              key={item.id}
              id={item.id}
              name={item.name}
              duration={item.duration}
              createdAt={item.createdAt}
              onClick={() => onClick(item.id)}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default NotifiactionModal;
