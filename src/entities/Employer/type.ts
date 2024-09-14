import { NoticeItem } from '../Post/types.ts';
import { AllNotice } from '@/entities/Post/types';

export interface ShopInfo {
  imageUrl: string;
  category: string | null;
  name: string | null;
  address1: string | null;
  description: string | null;
  originalHourlyPay: string;
}

export interface EmployerPostProps {
  noticeItem: NoticeItem;
  shopId: string;
  shopInfo: ShopInfo;
}

export interface GetMyShopProps {
  shopInfo: ShopInfo;
  shopId: string | null;
}
export interface EmptyShopProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  shopId: string;
}

export interface EmployerNoticeListProps {
  noticeItemList: AllNotice | null;
  shopId: string;
  shopInfo: ShopInfo;
}
