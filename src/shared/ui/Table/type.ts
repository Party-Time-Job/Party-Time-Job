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
