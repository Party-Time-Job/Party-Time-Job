/**
 * GET /shops/{shop_id}/notices/{notice_id} 결과를 반환한 객체를 그대로 타입으로 정의했습니다.
 * https://codeit.notion.site/API-10a715ce7c2240fd9d16aa47b5a6bc34
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
    currentUserApplication: {
      item: {
        id: string; // application.id,
        status: 'pending' | 'accepted' | 'rejected' | 'canceled'; // application.status
        createdAt: string; // application.createdAt
      };
    };
  };
  links: string[];
}
