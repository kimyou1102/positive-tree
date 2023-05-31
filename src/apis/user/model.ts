export interface SINGUP {
  email: string;
  password: string;
  nickname: string;
  name: string;
  birth: string;
  gender: number;
  kakaoId: string;
  blog: string;
  instagram: string;
  youtube: string;
  isMarketingAgreed: boolean;
}

export type LOGIN = {
  email: string;
  password: string;
};
