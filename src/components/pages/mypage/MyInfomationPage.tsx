import React, { useState } from 'react';
import styled from 'styled-components';
import { Span, Input, FlexContainer } from '@atoms';
import { SectionTitle, LabelTextInput } from '@molecules';
import { MypageUserInfo } from 'src/models/mypageUserInfo';

const SectionWrap = styled.div<{ top?: number }>`
  margin-top: ${(props) => `calc(${props.top}px * 0.8)` || '0px'};
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px 0px;
  margin-top: calc(24px * 0.8);
`;

const BirthSelect = styled.select`
  width: calc(180px * 0.8);
  height: calc(32px * 0.8);
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  background: #fff;
  padding-left: 8px;
  color: #767676;
`;

const CheckboxWrap = styled.div`
  color: #767676;
`;

const Checkbox = styled.input``;

const Label = styled.label`
  margin-right: 30px;
`;

const AddressButton = styled.button`
  width: calc(228px * 0.8);
  height: calc(48px * 0.8);
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  background: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

export function MyInfomationPage() {
  const initialState = {
    name: '',
    gender: '',
    birth: 0,
    email: '',
    phone: '',
    youtube: '',
    blog: '',
    instagram: '',
    address: '',
  };
  const [userInfo, setUserInfo] = useState<MypageUserInfo>(initialState);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, fn: string) => {
    if (fn === 'birth') {
      setUserInfo((prev) => ({
        ...prev,
        [fn]: Number(e.target.value),
      }));
    } else {
      setUserInfo((prev) => ({
        ...prev,
        [fn]: e.target.value,
      }));
    }
  };

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, gender: number) => {
    setUserInfo((prev) => ({
      ...prev,
      gender: gender === 0 ? '남자' : '여자',
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  console.log(userInfo);

  const years = Array.from({ length: 80 }, (v, i) => 1950 + i);
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <SectionWrap>
        <SectionTitle title="회원정보" />
        <Grid>
          <LabelTextInput text="이름" value={userInfo.name} onChange={(e) => onInputChange(e, 'name')} />
          <Span>성별</Span>
          <CheckboxWrap>
            <Checkbox
              type="radio"
              name="gender"
              id="male"
              value={userInfo.gender}
              onChange={(e) => onCheckboxChange(e, 0)}
            />
            <Label htmlFor="male">남성</Label>
            <Checkbox
              type="radio"
              name="gender"
              id="female"
              value={userInfo.gender}
              onChange={(e) => onCheckboxChange(e, 1)}
            />
            <Label htmlFor="female">여성</Label>
          </CheckboxWrap>
          <Span>출생년도</Span>
          <BirthSelect
            name="birth"
            value={userInfo.birth === 0 ? '' : String(userInfo.birth)}
            onChange={(e) => onInputChange(e, 'birth')}
          >
            {years.map((year) => (
              <option value={year}>{year}</option>
            ))}
          </BirthSelect>
          <LabelTextInput
            text="아이디(이메일)"
            placeholder="예) example@example.com"
            value={userInfo.email}
            onChange={(e) => onInputChange(e, 'email')}
          />
          <LabelTextInput
            text="연락처"
            placeholder="예) 010-0000-0000"
            value={userInfo.phone}
            onChange={(e) => onInputChange(e, 'phone')}
          />
        </Grid>
      </SectionWrap>
      <SectionWrap top={40}>
        <SectionTitle title="미디어연결" />
        <Grid>
          <LabelTextInput
            text="유튜브"
            placeholder="유튜브 링크"
            value={userInfo.youtube}
            onChange={(e) => onInputChange(e, 'youtube')}
          />
          <LabelTextInput
            text="블로그"
            placeholder="블로그 링크"
            value={userInfo.blog}
            onChange={(e) => onInputChange(e, 'blog')}
          />
          <LabelTextInput
            text="인스타그램"
            placeholder="인스타그램 링크"
            value={userInfo.instagram}
            onChange={(e) => onInputChange(e, 'instagram')}
          />
        </Grid>
      </SectionWrap>
      <SectionWrap top={111}>
        <SectionTitle title="주소록" />
        {userInfo.address === '' ? (
          <FlexContainer align="center" justify="center" height={15}>
            <AddressButton type="button">배송지 등록하기</AddressButton>
          </FlexContainer>
        ) : (
          <p>배송지</p>
        )}
      </SectionWrap>
    </form>
  );
}

export default MyInfomationPage;
