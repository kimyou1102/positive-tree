import React from 'react';
import styled from 'styled-components';
import { A } from '@atoms';

const Container = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: calc(17.375rem * 0.8);
  li {
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  font-weight: bold;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export function Menu() {
  return (
    <Container>
      <li>
        <StyledButton type="button">
          <A url="/">오늘오픈</A>
        </StyledButton>
      </li>
      <li>
        <StyledButton type="button">
          <A url="/">기자단</A>
        </StyledButton>
      </li>
      <li>
        <StyledButton type="button">
          <A url="/">유튜브</A>
        </StyledButton>
      </li>
      <li>
        <StyledButton type="button">
          <A url="/">이벤트</A>
        </StyledButton>
      </li>
    </Container>
  );
}
