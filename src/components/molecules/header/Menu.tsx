import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: calc(17.375rem * 0.8);
  li {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export function Menu() {
  return (
    <Container>
      <li>
        <StyledButton type="button">오늘오픈</StyledButton>
      </li>
      <li>
        <StyledButton type="button">기자단</StyledButton>
      </li>
      <li>
        <StyledButton type="button">유튜브</StyledButton>
      </li>
      <li>
        <StyledButton type="button">이벤트</StyledButton>
      </li>
    </Container>
  );
}
