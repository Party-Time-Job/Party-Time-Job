import { Dispatch, SetStateAction } from 'react';

export interface RegisterModalInterface {
  defaultName?: string;
  defaultPhone?: string;
  defaultAddress?: string;
  defaultBio?: string;
  showModal?: boolean;
  onClickClose: () => void;
  onClickOpen: () => void;
  handleClick: (text: string) => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface EntireItemsInterface {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

export interface MobileRegisterModalInterface {
  defaultName?: string;
  defaultPhone?: string;
  defaultAddress?: string;
  defaultBio?: string;
  showModal?: boolean;
  onClickClose: () => void;
  onClickOpen: () => void;
  handleClick: (text: string) => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setDefaultName: Dispatch<SetStateAction<string>>;
  setDefaultPhone: Dispatch<SetStateAction<string>>;
  setDefaultAddress: Dispatch<SetStateAction<string>>;
}
