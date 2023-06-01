import { atom } from 'recoil';
import { SINGUP, PATCH_USER } from 'src/apis/user/model';

export interface signUpType extends SINGUP {
  confirmPassword: string;
}

export const userState = atom<signUpType>({
  key: 'userState',
  default: {
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    name: '',
    birth: '',
    gender: 2,
    kakaoId: '',
    blog: '',
    instagram: '',
    youtube: '',
    isMarketingAgreed: false,
  },
});

export const kakaoUserState = atom<PATCH_USER>({
  key: 'kakaoUserState',
  default: {
    password: '',
    nickname: '',
    name: '',
    birth: '',
    gender: 2,
    kakaoId: '',
    phone: '',
    blog: '',
    instagram: '',
    youtube: '',
    marketingStatus: false,
  },
});
