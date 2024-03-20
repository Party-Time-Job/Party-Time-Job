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
    onClose(false);
  };

  return (
    <div className='fixed right-[350px] top-[12px] z-[1000] w-full overflow-y-auto rounded-none border border-solid border-[#cbc9cf] bg-[#ffebe7] px-[20px] py-0 pb-[24px] shadow-none sm:relative sm:w-[368px] sm:rounded-[10px] sm:shadow-md'>
      <div className='sticky top-0 flex justify-between bg-[#ffebe7] pb-[16px] pt-[24px]'>
        <h1 className='text-lg font-bold'>{`알림 ${items.length}개`}</h1>
        <button type='button' onClick={handleClose}>
          <Image src={'/close.svg'} alt='닫기 아이콘' width={24} height={24} />
        </button>
      </div>
      <div className='flex flex-col gap-[8px]'>
        {items.length === 0 && (
          <div className='flex h-[300px] flex-col items-center justify-center'>
            <span>알림이 없습니다!</span>
          </div>
        )}
        {items.map(item =>
          item.result === 'accepted' ? (
            <AcceptedItem
              key={item.id}
              id={item.id}
              name={item.name}
              duration={item.duration}
              createdAt={item.createdAt}
              onClick={onClick}
            />
          ) : (
            <RejectedItem
              key={item.id}
              id={item.id}
              name={item.name}
              duration={item.duration}
              createdAt={item.createdAt}
              onClick={onClick}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default NotifiactionModal;
