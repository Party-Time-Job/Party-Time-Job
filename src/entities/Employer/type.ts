import { NoticeItem } from '../Post/types.ts';

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
