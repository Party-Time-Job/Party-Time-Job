import { NotificationItemInterface } from '@/shared/NotificationModal/type';
import calcDiff from '@/shared/NotificationModal/utils/calcDiff';

export const AcceptedItem = ({
  id,
  name,
  duration,
  createdAt,
  onClick,
}: NotificationItemInterface) => {
  const timeDiff = calcDiff(createdAt);

  return (
    <button type='button' onClick={() => onClick(id)}>
      <div></div>
      <p>
        {name}({duration}) 공고 지원이 <span>승인</span>되었어요.
      </p>
      <span>{timeDiff}</span>
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
  const timeDiff = calcDiff(createdAt);

  return (
    <button type='button' onClick={() => onClick(id)}>
      <div></div>
      <p>
        {name}({duration}) 공고 지원이 <span>거절</span>되었어요.
      </p>
      <span>{timeDiff}</span>
    </button>
  );
};
