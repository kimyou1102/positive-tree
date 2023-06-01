import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getUser = async (token: string) => {
  const response = await axios({
    method: 'get',
    url: `${API_URL}/user/me`,
    headers: { Authorization: `Bearer ${token}` },
  });

  return response;
};
