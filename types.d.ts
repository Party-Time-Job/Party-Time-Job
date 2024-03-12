/**
 * GET '/notices' 결과를 반환한 객체를 그대로 타입으로 정의했습니다.
 */
interface AllNotice {
  offset: number;
  limit: number;
  address: string[];
  count: number;
  hasNext: boolean;
  items: Notice[];
  links: Links[];
}

interface NoticeItem {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: Shop;
}

/**
 *  type AllNotice의 items 속성을 따로 정의했습니다.
 */
interface Notice {
  item: NoticeItem;
  links: Links[];
}

interface ShopItem {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

/**
 * 가게 정보 타입입니다.
 */
interface Shop {
  item: ShopItem;
  href: string;
}

/**
 * type AllNotice의 links 속성을 따로 정의했습니다.
 */
interface Links {
  rel: string;
  description: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  href: string;
}
