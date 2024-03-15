export interface NoProfileRegisterInterface {
  isExist: boolean;
  profile?: {
    name: string;
    phone: string;
    address: string;
    bio: string;
  };
}
