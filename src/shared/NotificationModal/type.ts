export interface NotificationItem {
  id: string;
  name: string;
  duration: string;
  startsAt: string;
  workhour: number;
  createdAt: string;
  result: 'accepted' | 'rejected';
}

export interface NotificationModalInterface {
  items: NotificationItem[];
  onClick: (alertId: string) => void;
  onClose: () => void;
}

export interface NotificationItemInterface {
  id: string;
  name: string;
  duration: string;
  createdAt: string;
  onClick: (alertId: string) => void;
}
