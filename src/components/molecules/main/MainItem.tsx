import React from 'react';
import styled from 'styled-components';
import { Span, FlexContainer } from '@atoms';

interface MainItemProps {
  src: string;
  bgColor: string;
  title: string;
  imgWidth: string;
  imgHeight: string;
}

const Container = styled.button<{ bgColor: string; imgWidth: string; imgHeight: string }>`
  width: calc(9.625rem * 0.8);
  height: calc(9.625rem * 0.8);
  border-radius: 24px;
  background-color: ${(props) => props.bgColor};
  border: none;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: ${(props) => `calc(${props.imgWidth} * 0.8 )`};
    height: ${(props) => `calc(${props.imgHeight} * 0.8 )`};
  }
`;

export function MainItem({ src, bgColor, title, imgWidth, imgHeight }: MainItemProps) {
  return (
    <FlexContainer direction="column" width={9.625} align="center">
      <Container bgColor={bgColor} imgWidth={imgWidth} imgHeight={imgHeight}>
        <img src={src} alt={`${title}아이콘`} />
      </Container>
      <Span size={0.875} margin="0.4rem 0 0 0">
        {title}
      </Span>
    </FlexContainer>
  );
}
