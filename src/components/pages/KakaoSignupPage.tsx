import { H3, Span } from '@atoms';
import { AccountRadioBox } from '@atoms/account/AccountRadioBoxBox';
import { AccountRadioButton } from '@atoms/account/AccountRadioButton';
import { AccountRadioContainer } from '@atoms/account/AccountRadioContainer';
import { LoginBox } from '@atoms/account/LoginBox';
import { SignupContainer } from '@atoms/account/SignupContainer';
import { AccountBox } from '@atoms/account/AccountBox';
import { AccountButton } from '@atoms/account/AccuontButton';
import { AccountCheckBox } from '@atoms/account/AccountCheckBox';
import { AccountCheckboxContainer } from '@atoms/account/AccountCheckBoxContainer';
import { AccountInput } from '@atoms/account/AccountInput';
import React, { ChangeEvent, useRef, useState, useEffect } from 'react';
import { useRecoilState, useRecoilCallback } from 'recoil';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { kakaoUserState } from '../../store/user/user';
import { patchUser } from '../../apis/user/patch-user.api';

export function KakaoSignupPage() {
  const dateRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const [cookies, setCookie] = useCookies(['access_token']);

  const [userInfo, setUserInfo] = useRecoilState(kakaoUserState);
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
    // 전화번호 검증
    const regex = /^\d{2,3}-\d{3,4}-\d{4}$/;
    if (!regex.test(userInfo.phone)) {
      alert('본인 휴대폰의 전화번호 형식이 올바르지 않습니다.');
      return false;
    }

    return true;
  }

  const patchApi = useRecoilCallback(({ snapshot }) => async () => {
    const updateUserInfo = await snapshot.getPromise(kakaoUserState);

    if (!(await validation())) {
      return;
    }

    await patchUser(updateUserInfo, location.state.token)
      .then((res) => {
        setCookie('access_token', location.state.token);
        navigate('/');
      })
      .catch((err) => console.log(err));
  });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await patchApi();
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
    } else if (state === 'marketingStatus') {
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
    setTerms((prevState) => ({
      ...prevState,
      [state]: e.target.checked,
    }));
  };

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
                placeholder="닉네임"
                signup
                required
                value={userInfo.nickname}
                onChange={(e) => handleInput(e, 'nickname')}
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
                성별
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
                placeholder="휴대폰 번호(010-1234-1234)"
                signup
                required
                value={userInfo.phone}
                onChange={(e) => handleInput(e, 'phone')}
              />
              <AccountInput
                placeholder="카카오톡 아이디"
                signup
                required
                value={userInfo.kakaoId}
                onChange={(e) => handleInput(e, 'kakaoId')}
              />
              <AccountInput
                placeholder="블로그 주소(필수)"
                signup
                required
                value={userInfo.blog}
                onChange={(e) => handleInput(e, 'blog')}
              />
              <AccountInput
                placeholder="인스타그램 주소(선택)"
                signup
                value={userInfo.instagram}
                onChange={(e) => handleInput(e, 'instagram')}
              />
              <AccountInput
                placeholder="유튜브 주소(선택)"
                signup
                value={userInfo.youtube}
                onChange={(e) => handleInput(e, 'youtube')}
              />
            </AccountBox>

            <AccountCheckboxContainer>
              <AccountCheckBox type="checkbox" id="agree" onChange={(e) => handleInput(e, 'marketingStatus')} />
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
