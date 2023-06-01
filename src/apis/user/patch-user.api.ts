import axios from 'axios';
import { PATCH_USER } from './model';

const API_URL = process.env.REACT_APP_API_URL;

export const patchUser = async (useInfo: PATCH_USER, token: string) => {
  const response = await axios({
    method: 'patch',
    url: `${API_URL}/user`,
    data: useInfo,
    headers: { Authorization: `Bearer ${token}`, withCredentials: true },
  });

  return response;
};
