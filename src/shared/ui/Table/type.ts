const USERTYPE = {
  Employer: 'employer',
  Employee: 'employee',
} as const;

export type UserType = (typeof USERTYPE)[keyof typeof USERTYPE];
