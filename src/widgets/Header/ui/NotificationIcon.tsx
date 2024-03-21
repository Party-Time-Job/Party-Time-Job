'use client';

import { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import NotifiactionModal from '@/shared/NotificationModal/NotificationModal';

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
  const [alerts, setAlerts] = useState<AlertItemType[]>([]);
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
        setAlerts(prevAlerts =>
          prevAlerts.map(alert =>
            alert.id === alertId ? { ...alert, read: true } : alert,
          ),
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
            .filter(alert => !alert.item.read) // If you wish to exclude read alerts
            .map(alert => ({
              id: alert.item.id,
              name: alert.item.shop.item.name,
              duration: `${alert.item.notice.item.startsAt} - ${alert.item.notice.item.workhour}시간`,
              createdAt: alert.item.createdAt,
              startsAt: alert.item.notice.item.startsAt,
              workhour: alert.item.notice.item.workhour,
              result: alert.item.result,
              read: alert.item.read,
            })),
        );
      }
    };
    if (userId && token) {
      fetchUserAlerts();
    }
  }, [userId, token]);

  return (
    <div className='relative'>
      <button onClick={onClick}>
        {alerts.length > 0 ? (
          <img
            src='/active-notification.svg'
            className='bg-white'
            alt='알림있음'
          />
        ) : (
          <img src='/notification.svg' className='bg-white' alt='알림없음' />
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
