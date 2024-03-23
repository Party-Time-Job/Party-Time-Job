import { atom } from 'recoil';

const userTypeState = atom<string | null>({
  key: 'userTypeState',
  default: null,
});

export default userTypeState;
