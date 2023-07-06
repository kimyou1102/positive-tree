import React from 'react';
import styled from 'styled-components';
import { Span, A } from '@atoms';

const Container = styled.div`
  width: 100px;
  float: left;
  margin-right: calc(130px * 0.8);
`;

const Ul = styled.ul`
  margin-top: calc(24px * 0.8);
  display: grid;
  gap: calc(24px * 0.8);
`;

const Li = styled.li`
  cursor: pointer;
  font-size: 1rem;
`;

const MenuWrap = styled.div`
  margin-top: calc(64px * 0.8);
`;

export function SideMenu() {
  return (
    <Container>
      <div>
        <Span weight="bold" size={1.375}>
          활동관리
        </Span>
        <Ul>
          <Li>나의 캠페인</Li>
          <Li>관심 캠페인</Li>
        </Ul>
      </div>
      <MenuWrap>
        <Span weight="bold" size={1.375}>
          계정관리
        </Span>
        <Ul>
          <Li>
            <A url="/mypage/information">내 정보</A>
          </Li>
          <Li>
            <A url="/mypage/media">미디어 연결</A>
          </Li>
        </Ul>
      </MenuWrap>
    </Container>
  );
}
