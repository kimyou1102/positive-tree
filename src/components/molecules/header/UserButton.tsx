import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
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
  const [isLogin, setLogin] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  useEffect(() => {
    if (cookies.access_token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [cookies.access_token]);

  const onClick = () => {
    removeCookie('access_token');
  };

  const navigate = useNavigate();
  return (
    <FlexContainer>
      {isLogin ? (
        <>
          <StyledButton onClick={() => onClick()}>로그아웃</StyledButton>
          <StyledButton onClick={() => navigate('#')}>마이페이지</StyledButton>
        </>
      ) : (
        <>
          <StyledButton onClick={() => navigate('/login')}>로그인</StyledButton>
          <StyledButton onClick={() => navigate('/signup')}>회원가입</StyledButton>
        </>
      )}
    </FlexContainer>
  );
}
