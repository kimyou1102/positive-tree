import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '@atoms';

const StyledButton = styled.button`
  font-size: 1rem;
  border: none;
  background-color: transparent;
  padding: 0rem 1rem;
`;

export function UserButton() {
  return (
    <FlexContainer>
      <StyledButton>로그인</StyledButton>
      <StyledButton>회원가입</StyledButton>
    </FlexContainer>
  );
}
