export interface LinksInterface {
  rel: string;
  description: string;
  method: string;
  href: string;
  query?: object[];
  body?: object;
}

export interface ApplicationDataInterface {
  item: {
    id: string;
    status: 'pending' | 'accepted' | 'rejected' | 'canceled';
    createdAt: string;
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
    notice: {
      item: {
        id: string;
        hourlyPay: number;
        description: string;
        startsAt: string;
        workhour: number;
        closed: boolean;
      };
      href: string;
    };
  };
  links?: LinksInterface[];
}

export interface ApplicationInterface {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: ApplicationDataInterface[];
  links?: LinksInterface[];
}
