import { atom } from 'recoil';

const TokenState = atom<string | null>({
  key: 'TokenState',
  default: null,
});

export default TokenState;
