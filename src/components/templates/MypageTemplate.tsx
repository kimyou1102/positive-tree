import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Section } from '@atoms';
import { SideMenu } from '@molecules';
import { Profile } from '@organisms';

const Wrap = styled.div``;
const Main = styled.div`
  width: calc(900px * 0.8);
  float: left;
`;

export function MyPageTemplate() {
  return (
    <Section>
      <Profile />
      <Wrap>
        <SideMenu />
        <Main>
          <Outlet />
        </Main>
      </Wrap>
    </Section>
  );
}
