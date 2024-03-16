/**
 * GET '/notices' 결과를 반환한 객체를 그대로 타입으로 정의했습니다.
 */
export interface AllNotice {
  offset: number;
  limit: number;
  address: string[];
  count: number;
  hasNext: boolean;
  items: Notice[];
  links: Links[];
}

export interface NoticeItem {
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
export interface Notice {
  item: NoticeItem;
  links: Links[];
}

export interface NoticeDetails {
  item: NoticeItem;
  currentUserApplication: {
    item: {
      id: 'string';
      status: 'pending | accepted | rejected | canceled';
      createdAt: 'string';
    };
  };
  links: Links[];
}

export interface ShopItem {
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
export interface Shop {
  item: ShopItem;
  href: string;
}

/**
 * type AllNotice의 links 속성을 따로 정의했습니다.
 */
export interface Links {
  rel: string;
  description: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  href: string;
  body?: {
    hourlyPay: number;
    startsAt: string;
    workhour: string;
    description: string;
  };
  query?: { offset: undefined | number; limit: undefined | number };
}
