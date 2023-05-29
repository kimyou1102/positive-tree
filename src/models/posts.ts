export type ListType = {
  id: number;
  kakaoId: string;
  name: string;
  category: string;
  title: string;
  description: string;
  provision: string;
  reservationInfo: string;
  countOfApplications: number;
  address: string;
  mission: string;
  channel: string;
  additionalInfo: string;
  titleKeywords: string;
  bodyKeywords: string;
  schedule: {
    id: number;
    applicationDateStart: string;
    applicationDateEnd: string;
    contentsDateStart: string;
    contentsDateEnd: string;
    resultDate: string;
  };
  postImages: PostImagesType[];
};

type PostImagesType = {
  image: string;
};
