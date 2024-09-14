import { UseFormGetValues } from 'react-hook-form';

export interface UseRequestInfoProps {
  noticeId: string | null;
  shopId: string;
  getValues: UseFormGetValues<{
    startsAt: string;
    id: string;
    hourlyPay: string;
    workhour: string;
    description: string;
  }>;
}

export interface ErrorResponse {
  message: string;
}
