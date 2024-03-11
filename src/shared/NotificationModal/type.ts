export interface NotificationItem {
  id: string;
  storeName: string;
  duration: string;
  startsAt: string;
  workhour: number;
  createdAt: string;
  result: string;
}

export interface NotificationModalInterface {
  items: NotificationItem[];
  onClose: (isOpen: boolean) => void;
  onClick: (alertId: string) => void;
}

export interface NotificationItemInterface {
  id: string;
  name: string;
  duration: string;
  createdAt: string;
  onClick: (alertId: string) => void;
}
