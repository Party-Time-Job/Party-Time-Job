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
