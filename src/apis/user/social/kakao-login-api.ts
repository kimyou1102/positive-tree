import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const kakaoLogin = async (accessToken: string) => {
  const response = await axios
    .post(
      `${API_URL}/user/kakao`,
      {
        access_token: accessToken,
      },
      { withCredentials: true },
    )
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
  return response;
};
