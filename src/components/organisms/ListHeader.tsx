import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '@atoms';
import { Kind, FilterButtons } from '@molecules';

const Container = styled.div`
  padding-bottom: calc(0.563rem * 0.8);
  border-bottom: 1px solid #aaaaaa;
`;

const Title = styled.h1`
  font-size: calc(2rem * 0.8);
  font-weight: bold;
  margin-bottom: calc(1.5rem * 0.8);
`;

interface ListHeaderProps {
  title: string;
}

export function ListHeader({ title }: ListHeaderProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <FlexContainer justify="space-between" align="center">
        <Kind />
        <FilterButtons />
      </FlexContainer>
    </Container>
  );
}
