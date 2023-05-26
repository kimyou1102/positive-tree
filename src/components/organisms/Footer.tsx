import React from 'react';
import styled from 'styled-components';
import { FooterInfo, FooterPolicy } from '@molecules';

const Container = styled.footer`
  border-top: 1px solid #dbdbdb;
  padding-top: calc(2.438rem * 0.8);

  .wrap {
    max-width: 60rem;
    padding: 0px 3rem;
    margin: auto;
  }
`;

export function Footer() {
  return (
    <Container>
      <div className="wrap">
        <FooterInfo />
      </div>
      <FooterPolicy />
    </Container>
  );
}
