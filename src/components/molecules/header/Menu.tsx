import React from 'react';
import styled from 'styled-components';
import { A, Ul } from '@atoms';

const Li = styled.li`
  font-size: 1rem;
`;

const StyledButton = styled.button`
  font-weight: bold;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export function Menu() {
  return (
    <Ul justify="space-between" width={17.375}>
      <Li>
        <StyledButton type="button">
          <A url="/">오늘오픈</A>
        </StyledButton>
      </Li>
      <Li>
        <StyledButton type="button">
          <A url="/">기자단</A>
        </StyledButton>
      </Li>
      <Li>
        <StyledButton type="button">
          <A url="/">유튜브</A>
        </StyledButton>
      </Li>
      <Li>
        <StyledButton type="button">
          <A url="/">이벤트</A>
        </StyledButton>
      </Li>
    </Ul>
  );
}
