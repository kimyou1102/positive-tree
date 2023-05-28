import axios from 'axios';
import { POSTS_LIST } from './model';

const API_URL = process.env.REACT_APP_API_URL;

export const getPosts = async (): Promise<POSTS_LIST> => {
  const response = await axios
    .get(`${API_URL}/post`)
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};
