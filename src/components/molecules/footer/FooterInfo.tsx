import React from 'react';
import styled from 'styled-components';
import { Span } from '@atoms';
import logo from '../../../assets/images/footer_logo.png';

const Container = styled.div`
  display: flex;
  padding-bottom: calc(3rem * 0.8);
  box-sizing: border-box;
`;

const ImgWrap = styled.div`
  width: calc(88px * 0.8);
  height: calc() (92px * 0.8);

  img {
    width: calc(88px * 0.8);
    height: calc() (92px * 0.8);
  }
  margin-right: calc(8.75rem * 0.8);
`;

const TextWrap = styled.ul`
  display: grid;
  grid-gap: calc(0.5rem * 0.8);
`;

export function FooterInfo() {
  return (
    <Container>
      <ImgWrap>
        <img alt="로고" src={logo} />
      </ImgWrap>
      <TextWrap>
        <li>
          <Span>긍정나무 | 대표이사 : 김이름</Span>
        </li>
        <li>
          <Span>사업자등록번호 : 123-12-12345 | 통신판매업신고번호 제1234-대한민국 12345호</Span>
        </li>
        <li>
          <Span>주소 : 대한민국 어딘가</Span>
        </li>
        <li>
          <Span>전화번호 : 123-1234-1234 | 이메일 : example@example.com</Span>
        </li>
        <li>
          <Span weight="bold">© 긍정나무. All Rights Reserved</Span>
        </li>
      </TextWrap>
    </Container>
  );
}
