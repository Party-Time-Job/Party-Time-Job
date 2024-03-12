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

/**
 *  type AllNotice의 items 속성을 따로 정의했습니다.
 */
interface Notice {
  item: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
    closed: boolean;
    shop: {
      item: {
        id: string;
        name: string;
        category: string;
        address1: string;
        address2: string;
        description: string;
        imageUrl: string;
        originalHourlyPay: number;
      };
      href: string;
    };
  };
  links: Links[];
}

/**
 * type AllNotice의 links 속성을 따로 정의했습니다.
 */
interface Links {
  rel: string;
  description: string;
  method: 'GET' | 'POST | PUT | DELETE';
  href: string;
}
