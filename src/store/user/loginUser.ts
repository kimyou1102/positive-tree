import { atom } from 'recoil';

type loginUserType = {
  email: string;
};

export const loginUserState = atom<loginUserType>({
  key: 'loginUserState',
  default: {
    email: '',
  },
});
