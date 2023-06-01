import { FlexContainer, H3, Span } from '@atoms';
import { AccountDivider } from '@atoms/account/AccountDivider';
import { LoginBox } from '@atoms/account/LoginBox';
import { LoginContainer } from '@atoms/account/LoginContainer';
import { AccountBox } from '@atoms/account/AccountBox';
import { AccountButton } from '@atoms/account/AccuontButton';
import { AccountFlexDiv } from '@atoms/account/AccountFlexDiv';
import { AccountInput } from '@atoms/account/AccountInput';
import { Header } from '@organisms';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { FindPasswordSpan } from '@atoms/account/FindPasswordSpan';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { createLogin } from '../../apis/user/create-logtin-api';

function GoogleLoginBtn() {
  // const googleLoginOnSuccess = useGoogleLoginSuccessHandler();

  const googleLoginClick = useGoogleLogin({
    onSuccess: async (response) => {
      console.log(response);
      // await googleLoginOnSuccess(response.access_token);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <AccountButton theme="GOOGLE" onClick={() => googleLoginClick()}>
      구글 로그인 하기
    </AccountButton>
  );
}

export function LoginPage() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['access_token']);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function validation() {
    const regexEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!regexEmail.test(email)) {
      alert('이메일이 올바른 형식이 아닙니다.');
      return false;
    }

    return true;
  }

  const loginApi = async () => {
    if (!(await validation())) {
      return;
    }

    await createLogin({ email, password })
      .then((res) => {
        const cookie = res.headers.authorization.replace('Bearer ', '');
        setCookie('access_token', cookie);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  const login = async () => {
    await loginApi();
  };

  const REST_API_KEY = process.env.REACT_APP_KAKAO_AUTH_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  const kakaoLoginClick = () => {
    window.open(
      `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`,
      '_self',
    );
  };

  return (
    <div>
      <LoginContainer>
        <LoginBox>
          <H3 font="PretendardBold" size={2}>
            로그인
          </H3>

          <AccountBox>
            <AccountInput placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
            <AccountInput
              placeholder="비밀번호"
              type="password"
              noTopBorder
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </AccountBox>

          <AccountFlexDiv justify="flex-end">
            <FindPasswordSpan>비밀번호를 잊어버렸나요?</FindPasswordSpan>
          </AccountFlexDiv>

          <AccountButton theme="BLACK" onClick={login}>
            로그인 하기
          </AccountButton>

          <AccountButton theme="KAKAO" onClick={kakaoLoginClick}>
            카카오톡 로그인 하기
          </AccountButton>

          {/* <GoogleOAuthProvider clientId={googleOauthClientId}>
            <GoogleLoginBtn /> */}
          <AccountButton theme="GOOGLE">구글 로그인 하기</AccountButton>
          {/* </GoogleOAuthProvider> */}

          <AccountDivider />

          <AccountFlexDiv justify="flex-start">
            <H3 font="PretendardBold">긍정나무에서 체험을 함께하세요!</H3>
          </AccountFlexDiv>

          <AccountButton theme="WHITE" onClick={() => navigate('/signup')}>
            회원가입 하기
          </AccountButton>
        </LoginBox>
      </LoginContainer>
    </div>
  );
}
