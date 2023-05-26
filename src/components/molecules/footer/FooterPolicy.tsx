import React from 'react';
import styled from 'styled-components';
import { A } from '@atoms';

const Container = styled.div`
  height: calc(5.188rem * 0.8);
  border-top: 1px solid #dbdbdb;
`;

const StyledUl = styled.ul`
  max-width: 60rem;
  padding: 0px 3rem;
  margin: auto;
  display: flex;
  height: 100%;
  align-items: center;

  li {
    margin-right: 0.8rem;
  }
`;

export function FooterPolicy() {
  return (
    <Container>
      <StyledUl>
        <li>
          <A url="/">이용약관</A>
        </li>
        <li>
          <A url="/">개인정보처리방침</A>
        </li>
        <li>
          <A url="/">운영정책</A>
        </li>
      </StyledUl>
    </Container>
  );
}
