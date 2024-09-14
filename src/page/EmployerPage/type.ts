import { AllNotice } from '@/entities/Post/types';
import { ShopItem } from '@/features/Create-Shop/Type';
import { Item } from '@/app/shop/registration/recruitment/[id]/model/Type';

export interface DecodedToken {
  userId: string;
  type: 'employee' | 'employer';
}

export interface ShopDetailsPageProps {
  shopInfo: ShopItem | null;
  shopId: string;
  noticeItemList: AllNotice | null;
}

export interface RegistRecruitmentPageProps {
  noticeData: Item;
  shopId: string;
  noticeId: string | null;
}
