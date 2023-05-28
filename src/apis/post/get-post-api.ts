import axios from 'axios';
import { POST_LIST } from './model';

const API_URL = process.env.REACT_APP_API_URL;

export const getPost = async (id: number): Promise<POST_LIST> => {
  const response = await axios
    .get(`${API_URL}/post/${id}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};
