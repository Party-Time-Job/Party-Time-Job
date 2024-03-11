import Image from 'next/image';
import { NotificationModalInterface } from '@/shared/NotificationModal/type';
import {
  AcceptedItem,
  RejectedItem,
} from '@/shared/NotificationModal/NotificationItem';

const NotifiactionModal = ({
  items,
  onClose,
  onClick,
}: NotificationModalInterface) => {
  const handleClose = () => {
    onClose(false);
  };

  return (
    <div className='z-1000 right-350 rounded-10 relative top-12 w-[368px] overflow-y-auto border border-solid border-[#cbc9cf] bg-[#ffebe7] px-20 py-0 pb-24 shadow-md md:fixed md:inset-0 md:w-full md:rounded-none md:border-0 md:shadow-none'>
      <div className='bg-#ffebe7] sticky top-0 flex justify-between pb-16 pt-24'>
        <h1 className='text-lg font-bold'>{`알림 ${items.length}개`}</h1>
        <button
          type='button'
          onClick={handleClose}
          className='md:top-26 hidden md:right-20 md:block'
        >
          <Image src={'/close.svg'} alt='닫기 아이콘' width={24} height={24} />
        </button>
      </div>
      <div className='flex flex-col gap-8'>
        {items.length === 0 && (
          <div className='h-300 flex flex-col items-center justify-center'>
            <span>알림이 없습니다!</span>
          </div>
        )}
        {items.map(item =>
          item.result === 'accepted' ? (
            <AcceptedItem
              key={item.id}
              id={item.id}
              name={item.storeName}
              duration={item.duration}
              createdAt={item.createdAt}
              onClick={onClick}
            />
          ) : (
            <RejectedItem
              key={item.id}
              id={item.id}
              name={item.storeName}
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
