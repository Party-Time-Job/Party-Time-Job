import { AllNotice } from '@/entities/Post/types';
import { ShopItem } from '@/features/Create-Shop/Type';

export interface DecodedToken {
  userId: string;
  type: 'employee' | 'employer';
}

export interface ShopDetailsPageProps {
  shopInfo: ShopItem | null;
  shopId: string;
  noticeItemList: AllNotice | null;
}
