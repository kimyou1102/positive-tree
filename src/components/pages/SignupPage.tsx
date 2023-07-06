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
import React, { ChangeEvent, useRef, useState, useEffect } from 'react';
import { useRecoilState, useRecoilCallback } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { userState } from '../../store/user/user';
import { createSingup } from '../../apis/user/create-singup-api';

export function SignupPage() {
  const dateRef = useRef<HTMLInputElement>(null);

  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [active, setActive] = useState<boolean>(false);

  const navigate = useNavigate();

  const [terms, setTerms] = useState({
    service: false,
    age: false,
    personalInformation: false,
  });

  useEffect(() => {
    if (terms.service && terms.age && terms.personalInformation) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [terms]);

  function validation() {
    if (userInfo.password !== userInfo.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }

    const regexEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!regexEmail.test(userInfo.email)) {
      alert('이메일이 올바른 형식이 아닙니다.');
      return false;
    }

    return true;
  }

  const signupApi = useRecoilCallback(({ snapshot }) => async () => {
    console.log(snapshot);
    const updateUserInfo = await snapshot.getPromise(userState);
    console.log(updateUserInfo);
    if (!(await validation())) {
      return;
    }

    await createSingup(updateUserInfo)
      .then((res) => {
        console.log(res);
        // navigate('/')
      })
      .catch((err) => console.log(err));

    console.log('통과');
  });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(userInfo);
    await signupApi();

    // await createSingup(userInfo).then((res) => console.log(res));
    console.log('서브밋');
  };

  function handleDateClick() {
    dateRef.current!.type = 'date';
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>, state: string) => {
    if (state === 'gender') {
      setUserInfo((prevState) => ({
        ...prevState,
        [state]: Number(e.target.value),
      }));
    } else if (state === 'isMarketingAgreed') {
      setUserInfo((prevState) => ({
        ...prevState,
        [state]: e.target.checked,
      }));
    } else {
      setUserInfo((prevState) => ({
        ...prevState,
        [state]: e.target.value,
      }));
    }
  };

  const handleCheck = (e: ChangeEvent<HTMLInputElement>, state: string) => {
    console.log(state, e.target.checked);
    setTerms((prevState) => ({
      ...prevState,
      [state]: e.target.checked,
    }));
  };

  console.log(userInfo);

  return (
    <div>
      <SignupContainer>
        <LoginBox>
          <H3 font="PretendardBold" size={2}>
            회원가입
          </H3>
          <form onSubmit={submit}>
            <AccountBox>
              <AccountInput
                placeholder="이메일*"
                signup
                required
                type="email"
                value={userInfo.email}
                onChange={(e) => handleInput(e, 'email')}
              />
              <AccountInput
                placeholder="닉네임*"
                signup
                required
                value={userInfo.nickname}
                onChange={(e) => handleInput(e, 'nickname')}
              />
              <AccountInput
                placeholder="이름*"
                signup
                required
                value={userInfo.name}
                onChange={(e) => handleInput(e, 'name')}
              />
              <AccountInput
                placeholder="출생년도"
                ref={dateRef}
                onClick={(e) => handleDateClick()}
                onChange={(e) => handleInput(e, 'birth')}
                // onChange={(e) => console.log(e.target.value)}
                value={userInfo.birth}
                signup
              />

              <Span font="PretendardBold" color="#767676">
                성별*
              </Span>

              <AccountRadioContainer>
                <AccountRadioBox>
                  <AccountRadioButton
                    type="radio"
                    name="gender"
                    value={0}
                    onChange={(e) => {
                      handleInput(e, 'gender');
                    }}
                  />
                  <Span font="PretendardRegular" size={0.9}>
                    남자
                  </Span>
                </AccountRadioBox>
                <AccountRadioBox>
                  <AccountRadioButton
                    type="radio"
                    name="gender"
                    value={1}
                    onChange={(e) => {
                      handleInput(e, 'gender');
                    }}
                  />
                  <Span font="PretendardRegular" size={0.9}>
                    여자
                  </Span>
                </AccountRadioBox>
              </AccountRadioContainer>

              <AccountInput
                placeholder="카카오톡 아이디*"
                signup
                required
                value={userInfo.kakaoId}
                onChange={(e) => handleInput(e, 'kakaoId')}
              />
              <AccountInput
                placeholder="비밀번호*"
                signup
                required
                type="password"
                value={userInfo.password}
                onChange={(e) => handleInput(e, 'password')}
              />
              <AccountInput
                placeholder="비밀번호 확인*"
                signup
                required
                type="password"
                value={userInfo.confirmPassword}
                onChange={(e) => handleInput(e, 'confirmPassword')}
              />
              <AccountInput
                placeholder="블로그 주소*"
                signup
                required
                value={userInfo.blog}
                onChange={(e) => handleInput(e, 'blog')}
              />
              <AccountInput
                placeholder="인스타그램 주소*"
                signup
                required
                value={userInfo.instagram}
                onChange={(e) => handleInput(e, 'instagram')}
              />
              <AccountInput
                placeholder="유튜브 주소*"
                signup
                required
                value={userInfo.youtube}
                onChange={(e) => handleInput(e, 'youtube')}
              />
            </AccountBox>

            <AccountCheckboxContainer>
              <AccountCheckBox type="checkbox" id="agree" onChange={(e) => handleInput(e, 'isMarketingAgreed')} />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label id="agree">
                캠페인 모집 및 추천, 설문조사, 이벤트 정보등의 마케팅 수신
                <br />
                (이메일, 문자 및 카카오톡) 에 동의합니다. (선택)
              </label>
            </AccountCheckboxContainer>

            <AccountCheckboxContainer>
              <AccountCheckBox
                type="checkbox"
                id="agree1"
                onChange={(e) => {
                  handleCheck(e, 'service');
                }}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label id="agree1">서비스 이용약관에 동의합니다. (필수)</label>
            </AccountCheckboxContainer>

            <AccountCheckboxContainer>
              <AccountCheckBox
                type="checkbox"
                id="agree2"
                onChange={(e) => {
                  handleCheck(e, 'age');
                }}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label id="agree2">본인은 만 14세 이상입니다. (필수)</label>
            </AccountCheckboxContainer>

            <AccountCheckboxContainer>
              <AccountCheckBox
                type="checkbox"
                id="agree3"
                onChange={(e) => {
                  handleCheck(e, 'personalInformation');
                }}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label id="agree3">개인정보 수집 및 이용에 동의합니다. (필수)</label>
            </AccountCheckboxContainer>

            <AccountButton theme="BLACK" signup className={!active ? 'disabled' : ''} disabled={!active}>
              회원가입 하기
            </AccountButton>
          </form>
        </LoginBox>
      </SignupContainer>
    </div>
  );
}

export default SignupPage;
