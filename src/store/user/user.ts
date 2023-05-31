import { atom } from 'recoil';
import { SINGUP } from 'src/apis/user/model';

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
