import axios from 'axios';
import { LOGIN } from './model';

const API_URL = process.env.REACT_APP_API_URL;

export const createLogin = async (useInfo: LOGIN) => {
  const response = await axios({
    method: 'post',
    url: `${API_URL}/user/login`,
    data: useInfo,
    headers: { 'Content-Type': 'application/json' },
  });

  return response;
};
