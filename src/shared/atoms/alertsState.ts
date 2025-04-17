import { atom } from 'recoil';

export type AlertItemType = {
  id: string;
  name: string;
  duration: string;
  createdAt: string;
  startsAt: string;
  workhour: number;
  read: boolean;
  result: 'accepted' | 'rejected';
};

const alertsState = atom<AlertItemType[]>({
  key: 'alertsState',
  default: [],
});

export default alertsState;
