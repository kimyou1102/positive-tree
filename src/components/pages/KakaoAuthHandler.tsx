import React, { useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { kakaoLogin } from '../../apis/user/social/kakao-login-api';

export function KakaoAuthHandler() {
  const AUTHORIZE_CODE = new URL(window.location.href).searchParams.get('code');
  const [cookies, setCookie] = useCookies(['kakao_access_token']);
  const navigate = useNavigate();

  console.log(AUTHORIZE_CODE);
  const API_URL = process.env.REACT_APP_API_URL;
  console.log(API_URL);
  // const REST_API_KEY = process.env.REACT_APP_KAKAO_AUTH_API_KEY;
  // const REST_API_KEY = process.env.REACT_APP_KAKAO_AUTH_API_KEY;
  const REST_API_KEY = 'b10e517980a478ca257a11c89320a8a4';
  console.log(REST_API_KEY);
  const REDIRECT_URI = 'http://localhost:3000/kakao_login';
  // const REDIRECT_URI = 'http://localhost:3000/oauth';

  // b10e517980a478ca257a11c89320a8a4
  // b10e517980a478ca257a11c89320a8a4
  // useEffect(() => {
  //   const kakaoResponse = (accessToken: string) => {
  //     console.log('access_token :', accessToken);
  //     axios
  //       .post(
  //         `${API_URL}/user/kakao`,
  //         {
  //           access_token: accessToken,
  //         },
  //         { withCredentials: true },
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   const header = { 'Content-Type': 'application/x-www-form-urlencoded' };
  //   const body = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`;

  //   axios
  //     .post('https://kauth.kakao.com/oauth/token', body, {
  //       headers: header,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       kakaoResponse(res.data.access_token);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [API_URL, AUTHORIZE_CODE, REST_API_KEY]);

  return <div />;
}
