import { ReactNode } from 'react';

const USERTYPE = {
  Employer: 'employer',
  Employee: 'employee',
} as const;

export type UserType = (typeof USERTYPE)[keyof typeof USERTYPE];

const STATUS = {
  Peding: 'pending',
  Accepted: 'accepted',
  Rejected: 'rejected',
  Canceled: 'canceled',
} as const;

export type Status = (typeof STATUS)[keyof typeof STATUS];

export interface ProfileInterface {
  id: string;
  status: Status;
  name: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
}

export interface StoreInterface {
  id: string;
  status: 'pending' | 'accepted' | 'rejected' | 'canceled';
  name?: string;
  bio?: string;
  phone?: string;
}

export interface TableInterface {
  id: string;
  status: Status;
  name?: string;
  firstValue?: string;
  secondValue?: string;
  bio?: string;
}

export interface ProfileTableInterface {
  data: ProfileInterface[];
  pagination: ReactNode;
}

export interface StoreTableInterface {
  data: StoreInterface[];
  pagination: ReactNode;
  shopId: string;
  noticeId: string;
}
