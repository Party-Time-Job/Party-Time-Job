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
    <div>
      <div>
        <h1>{`알림 ${items.length}개`}</h1>
        <button type='button' onClick={handleClose}>
          <Image src={'/close.svg'} alt='닫기 아이콘' width={24} height={24} />
        </button>
      </div>
      <div>
        {items.length === 0 && (
          <div>
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
