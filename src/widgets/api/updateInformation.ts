export interface LinksInterface {
  rel: string;
  description: string;
  method: string;
  href: string;
}

export interface UserShopInterface {
  href: string;
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
}

export interface UserInformationInterface {
  item: {
    id: string;
    email: string;
    type: 'employer' | 'employee';
    name?: string;
    phone?: string;
    address?: string;
    bio?: string;
    shop: UserShopInterface | null;
  };
  links?: LinksInterface[];
}
