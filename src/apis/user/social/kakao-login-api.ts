import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const kakaoLogin = async (accessToken: string): Promise<any> => {
  const response = await axios
    .get(`${API_URL}/user/kakao?code=${accessToken}`)
    .then((res) => res)
    .catch((error) => {
      console.log(error);
    });
  return response;
};
