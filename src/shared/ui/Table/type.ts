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

export interface ProfileTableInterface {
  id: string;
  status: Status;
  name: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
}

export interface StoreTableInterface {
  id: string;
  status: Status;
  name?: string;
  description?: string;
  phone?: string;
}
