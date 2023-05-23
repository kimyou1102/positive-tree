import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexContainer } from '@atoms';
import { Menu, UserButton, SearchBar } from '@molecules';
import logo from '../../assets/images/header_logo.png';

const Container = styled.header`
  display: flex;
  height: calc(80px * 0.8);
  justify-content: space-around;
`;

const StyleLogo = styled.img`
  width: calc(52px * 0.8);
  height: calc(54px * 0.8);
  margin-right: 1.875rem;
`;

export function Header() {
  const [value, setValue] = useState<string>('');

  return (
    <Container>
      <FlexContainer align="center">
        <StyleLogo src={logo} alt="로고" />
        <Menu />
      </FlexContainer>
      <FlexContainer align="center">
        <SearchBar value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        <UserButton />
      </FlexContainer>
    </Container>
  );
}
