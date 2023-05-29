import { H3, Span } from '@atoms';
import { AccountDivider } from '@atoms/account/AccountDivider';
import { AccountRadioBox } from '@atoms/account/AccountRadioBoxBox';
import { AccountRadioButton } from '@atoms/account/AccountRadioButton';
import { AccountRadioContainer } from '@atoms/account/AccountRadioContainer';
import { LoginBox } from '@atoms/account/LoginBox';
import { LoginContainer } from '@atoms/account/LoginContainer';
import { SignupContainer } from '@atoms/account/SignupContainer';
import { AccountBox } from '@atoms/account/AccountBox';
import { AccountButton } from '@atoms/account/AccuontButton';
import { AccountCheckBox } from '@atoms/account/AccountCheckBox';
import { AccountCheckboxContainer } from '@atoms/account/AccountCheckBoxContainer';
import { AccountFlexDiv } from '@atoms/account/AccountFlexDiv';
import { AccountInput } from '@atoms/account/AccountInput';
import { Header } from '@organisms';
import React, { useRef } from 'react';

function SignupPage() {
  const dateRef = useRef<HTMLInputElement>(null);

  function handleDateClick() {
    // console.log(dateRef.current);
    dateRef.current!.type = 'date';
  }

  return (
    <div>
      <Header />

      <SignupContainer>
        <LoginBox>
          <H3 font="PretendardBold" size={2}>
            회원가입
          </H3>

          <AccountBox>
            <AccountInput placeholder="이메일*" signup type="email" />
            <AccountInput placeholder="닉네임*" signup />
            <AccountInput placeholder="이름*" signup />
            <AccountInput placeholder="출생년도" ref={dateRef} onClick={() => handleDateClick()} signup />

            <Span font="PretendardBold" color="#767676">
              성별*
            </Span>

            <AccountRadioContainer>
              <AccountRadioBox>
                <AccountRadioButton type="radio" name="male" />
                <Span font="PretendardRegular" size={0.9}>
                  남자
                </Span>
              </AccountRadioBox>
              <AccountRadioBox>
                <AccountRadioButton type="radio" name="female" />
                <Span font="PretendardRegular" size={0.9}>
                  여자
                </Span>
              </AccountRadioBox>
            </AccountRadioContainer>

            <AccountInput placeholder="카카오톡 아이디*" signup />
            <AccountInput placeholder="비밀번호*" signup type="password" />
            <AccountInput placeholder="비밀번호 확인*" signup type="password" />
            <AccountInput placeholder="블로그 주소*" signup />
            <AccountInput placeholder="인스타그램 주소*" signup />
            <AccountInput placeholder="유튜브 주소*" signup />
          </AccountBox>

          <AccountCheckboxContainer>
            <AccountCheckBox type="checkbox" id="agree" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label id="agree">
              캠페인 모집 및 추천, 설문조사, 이벤트 정보등의 마케팅 수신
              <br />
              (이메일, 문자 및 카카오톡) 에 동의합니다. (선택)
            </label>
          </AccountCheckboxContainer>

          <AccountCheckboxContainer>
            <AccountCheckBox type="checkbox" id="agree1" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label id="agree1">서비스 이용약관에 동의합니다. (필수)</label>
          </AccountCheckboxContainer>

          <AccountCheckboxContainer>
            <AccountCheckBox type="checkbox" id="agree2" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label id="agree2">본인은 만 14세 이상입니다. (필수)</label>
          </AccountCheckboxContainer>

          <AccountCheckboxContainer>
            <AccountCheckBox type="checkbox" id="agree3" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label id="agree3">개인정보 수집 및 이용에 동의합니다. (필수)</label>
          </AccountCheckboxContainer>

          <AccountButton theme="BLACK" signup>
            회원가입 하기
          </AccountButton>
        </LoginBox>
      </SignupContainer>
    </div>
  );
}

export default SignupPage;
