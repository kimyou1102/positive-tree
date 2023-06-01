import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { kakaoLogin } from '../../apis/user/social/kakao-login-api';
import { getUser } from '../../apis/user/get-user-api';

export function KakaoAuthHandler() {
  const AUTHORIZE_CODE = new URL(window.location.href).searchParams.get('code');
  const [cookies, setCookie] = useCookies(['access_token']);
  const navigate = useNavigate();

  useEffect(() => {
    const kakaoLoginApi = async (code: string) => {
      await kakaoLogin(code)
        .then(async (res) => {
          const token = res.headers.get('authorization').replace('Bearer ', '');
          await getUser(token).then((response) => {
            if (response.data.data.nickname === null) {
              navigate('/kakao_signup', { replace: true, state: { token } });
            } else {
              setCookie('access_token', token);
              navigate('/');
            }
          });
        })
        .catch((err) => console.log(err));
    };
    kakaoLoginApi(AUTHORIZE_CODE!);
  }, [AUTHORIZE_CODE, navigate, setCookie]);
  return <div />;
}
