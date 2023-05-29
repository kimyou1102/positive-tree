import { ListType } from 'src/models/posts';

export type POSTS_LIST = {
  success: boolean;
  code: number;
  msg: string;
  list: ListType[];
};

export type POST_LIST = {
  success: boolean;
  code: number;
  msg: string;
  data: ListType;
};
