import { FlexContainer, H3, Span } from '@atoms';
import { AccountDivider } from '@atoms/account/AccountDivider';
import { LoginBox } from '@atoms/account/LoginBox';
import { LoginContainer } from '@atoms/account/LoginContainer';
import { AccountBox } from '@atoms/account/AccountBox';
import { AccountButton } from '@atoms/account/AccuontButton';
import { AccountFlexDiv } from '@atoms/account/AccountFlexDiv';
import { AccountInput } from '@atoms/account/AccountInput';
import { Header } from '@organisms';
import React from 'react';
import { FindPasswordSpan } from '@atoms/account/FindPasswordSpan';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      <LoginContainer>
        <LoginBox>
          <H3 font="PretendardBold" size={2}>
            로그인
          </H3>

          <AccountBox>
            <AccountInput placeholder="이메일" />
            <AccountInput placeholder="비밀번호" type="password" noTopBorder />
          </AccountBox>

          <AccountFlexDiv justify="flex-end">
            <FindPasswordSpan>비밀번호를 잊어버렸나요?</FindPasswordSpan>
          </AccountFlexDiv>

          <AccountButton theme="BLACK">로그인 하기</AccountButton>

          <AccountButton theme="KAKAO">카카오톡 로그인 하기</AccountButton>

          <AccountButton theme="GOOGLE">구글 로그인 하기</AccountButton>

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
