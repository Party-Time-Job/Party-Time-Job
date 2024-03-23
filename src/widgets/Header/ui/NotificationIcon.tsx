'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getCookie } from 'cookies-next';
import NotifiactionModal from '@/shared/NotificationModal/NotificationModal';
import alertsState from '@/atoms/alertsState';

type AlertItemType = {
  id: string;
  name: string;
  duration: string;
  createdAt: string;
  startsAt: string;
  workhour: number;
  read: boolean;
  result: 'accepted' | 'rejected';
};

interface AlertItem {
  id: string;
  createdAt: string;
  result: 'accepted' | 'rejected';
  read: boolean;
  application: {
    item: {
      id: string;
      status: 'pending' | 'accepted' | 'rejected';
    };
    href: string;
  };
  shop: {
    item: {
      id: string;
      name: string;
      category: string;
      address1: string;
      address2: string;
      description: string;
      imageUrl: string;
      originalHourlyPay: number;
    };
    href: string;
  };
  notice: {
    item: {
      id: string;
      hourlyPay: number;
      description: string;
      startsAt: string;
      workhour: number;
      closed: boolean;
    };
    href: string;
  };
}

interface AlertResponse {
  items: Array<{ item: AlertItem }>;
}

const NotificationIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [alerts, setAlerts] = useRecoilState<AlertItemType[]>(alertsState);
  const userId = getCookie('userid');
  const token = getCookie('token');

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const markAsRead = async (alertId: string) => {
    try {
      const response = await fetch(
        `https://bootcamp-api.codeit.kr/api/3-2/the-julge/users/${userId}/alerts/${alertId}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.ok) {
        setAlerts(currentAlerts =>
          currentAlerts.filter(alert => alert.id !== alertId),
        );
      }
    } catch (error) {
      console.error('읽음 처리 중 에러 발생:', error);
    }
  };

  useEffect(() => {
    const fetchUserAlerts = async () => {
      const response = await fetch(
        `https://bootcamp-api.codeit.kr/api/3-2/the-julge/users/${userId}/alerts`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = (await response.json()) as AlertResponse;
      if (response.ok) {
        setAlerts(
          data.items
            .filter(({ item }) => !item.read)
            .map(({ item }) => ({
              id: item.id,
              name: item.shop.item.name,
              duration: `${item.notice.item.startsAt} - ${item.notice.item.workhour}시간`,
              createdAt: item.createdAt,
              startsAt: item.notice.item.startsAt,
              workhour: item.notice.item.workhour,
              result: item.result,
              read: item.read,
            })),
        );
      }
    };
    if (userId && token) {
      fetchUserAlerts();
    }
  }, [userId, token, setAlerts]);

  return (
    <div className='relative flex'>
      <button onClick={onClick}>
        {alerts.length > 0 ? (
          <img src='/active-notification.svg' alt='알림있음' />
        ) : (
          <img src='/notification.svg' alt='알림없음' />
        )}

        {isOpen && (
          <NotifiactionModal
            items={alerts}
            onClose={onClose}
            onClick={markAsRead}
          />
        )}
      </button>
    </div>
  );
};

export default NotificationIcon;
