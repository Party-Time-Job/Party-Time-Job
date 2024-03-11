export interface NotificationItem {
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
