import React from 'react';
import styled from 'styled-components';
import { Span, FlexContainer } from '@atoms';

interface MainItemProps {
  src: string;
  bgColor: string;
  title: string;
}

const Container = styled.button<{ bgColor: string }>`
  width: calc(11.25rem * 0.8);
  height: calc(11.25rem * 0.8);
  border-radius: 24px;
  background-color: ${(props) => props.bgColor};
  border: none;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: calc(6.25rem * 0.8);
    height: calc(6.25rem * 0.8);
  }
`;

export function MainItem({ src, bgColor, title }: MainItemProps) {
  return (
    <FlexContainer direction="column" width={11.25} align="center">
      <Container bgColor={bgColor}>
        <img src={src} alt={`${title}아이콘`} />
      </Container>
      <Span size={0.875} margin="0.4rem 0 0 0">
        {title}
      </Span>
    </FlexContainer>
  );
}
