import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '@atoms';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled.button`
  font-size: 1rem;
  border: none;
  background-color: transparent;
  padding: 0rem 1rem;
  cursor: pointer;
`;

export function UserButton() {
  const navigate = useNavigate();
  return (
    <FlexContainer>
      <StyledButton onClick={() => navigate('/login')}>로그인</StyledButton>
      <StyledButton onClick={() => navigate('/signup')}>회원가입</StyledButton>
    </FlexContainer>
  );
}
