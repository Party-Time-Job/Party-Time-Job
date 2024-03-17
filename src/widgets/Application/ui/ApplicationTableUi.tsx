import { ProfileInterface } from '@/shared/ui/Table/type';

export interface ApplicationTableInterface {
  data: ProfileInterface[];
  page: number;
  total: number;
}
