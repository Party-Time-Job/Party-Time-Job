export interface Shop {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: string;
}

export interface Item {
  id: string;
  hourlyPay: string;
  startsAt: string;
  workhour: string;
  description: string;
}

export interface Link {
  rel: string;
  description: string;
  method: string;
  href: string;
  body?: {
    hourlyPay: string;
    startsAt: string;
    workhour: string;
    description: string;
  };
  query?: {
    offset?: 'undefined' | number;
    limit?: 'undefined' | number;
  };
}

export interface Data {
  item: Item;
  links: Link[];
}
