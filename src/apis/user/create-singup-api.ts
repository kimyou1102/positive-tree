import axios from 'axios';
import { SINGUP } from './model';

const API_URL = process.env.REACT_APP_API_URL;

export const createSingup = async (useInfo: SINGUP) => {
  const response = await axios({
    method: 'post',
    url: `${API_URL}/user/signup`,
    data: useInfo,
    headers: { 'Content-Type': 'application/json' },
  });

  return response;
};
