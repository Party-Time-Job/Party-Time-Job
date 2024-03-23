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

export interface Links {
  rel: string;
  description: string;
  method: string;
  href: string;
  body?: { [key: string]: string };
  query?: { [key: string]: string };
}

export interface Item {
  id: string;
  email: string;
  type: string;
  shop: {
    item: Shop;
    href: string;
  };
  links: Links[];
}

export interface UserData {
  item: Item;
  shop: Shop;
}
