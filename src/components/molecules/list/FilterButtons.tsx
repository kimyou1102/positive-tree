import React from 'react';
import { Ul } from '@atoms';
import styled from 'styled-components';

const Li = styled.li``;

const StyledButton = styled.button`
  box-sizing: border-box;
  padding: calc(0.438rem * 0.8) calc(1.25rem * 0.8);
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  background-color: white;
  font-size: calc(0.875rem * 0.9);
  font-weight: 700;
  color: #767676;
`;

export function FilterButtons() {
  return (
    <Ul justify="space-between" width={24.375}>
      <Li>
        <StyledButton>블로그</StyledButton>
      </Li>
      <Li>
        <StyledButton>인스타그램</StyledButton>
      </Li>
      <Li>
        <StyledButton>유튜브</StyledButton>
      </Li>
      <Li>
        <StyledButton>최신순</StyledButton>
      </Li>
    </Ul>
  );
}
