import React from 'react';
import styled from 'styled-components';
import { Span, FlexContainer } from '@atoms';

interface MainItemProps {
  src: string;
  title: string;
  imgWidth: number;
  imgHeight: number;
}

const Container = styled.button<{ imgWidth: number; imgHeight: number }>`
  width: calc(100px * 0.8);
  height: calc(100px * 0.8);
  border-radius: 24px;
  background-color: white;
  border: none;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.16);

  img {
    width: ${(props) => `calc(${props.imgWidth}px * 0.8 )`};
    height: ${(props) => `calc(${props.imgHeight}px * 0.8 )`};
  }
`;

export function MainItem({ src, title, imgWidth, imgHeight }: MainItemProps) {
  return (
    <FlexContainer direction="column" align="center">
      <Container imgWidth={imgWidth} imgHeight={imgHeight}>
        <img src={src} alt={`${title}아이콘`} />
      </Container>
      <Span size={0.875} weight="bold" margin="0.4rem 0 0 0">
        {title}
      </Span>
    </FlexContainer>
  );
}
