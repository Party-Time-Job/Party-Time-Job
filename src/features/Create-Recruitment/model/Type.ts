import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
} from 'react-hook-form';
import { Item } from '@/app/shop/registration/recruitment/[id]/model/Type';

export interface CreateRecruitmentForm {
  startsAt: string;
  id: string;
  hourlyPay: string;
  workhour: string;
  description: string;
}

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

export interface CreateRecruitmentProps {
  noticeData: Item;
  shopId: string;
  noticeId: string | null;
}

export interface ErrorResponse {
  message: string;
}

export interface RecruitmentInputProps {
  register: UseFormRegister<CreateRecruitmentForm>;
  errors: FieldErrors<CreateRecruitmentForm>;
}
