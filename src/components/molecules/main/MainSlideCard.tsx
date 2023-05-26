import React from 'react';
import styled from 'styled-components';
import { Span, H3, FlexContainer } from '@atoms';

interface MainSlideCardProps {
  title: string;
  sub: string;
  bgColor?: string;
  src: string;
}

const Container = styled.div<{ bgColor: string }>`
  display: flex;
  position: relative;
  /* width: calc(24rem * 0.8); */
  width: 100%;
  height: calc(15.625rem * 0.8);
  border-radius: 20px;
  background-color: ${(props) => props.bgColor};

  div {
    display: flex;
  }
  img {
    width: calc(16.688rem * 0.8);
    height: calc(10.938rem * 0.8);
  }
`;

export function MainSlideCard({ title, sub, bgColor = 'transparent', src }: MainSlideCardProps) {
  const [title1, title2] = title.split(',');
  const [sub1, sub2] = sub.split(',');
  return (
    <Container bgColor={bgColor}>
      <FlexContainer direction="column" margin="1.8rem 0px 0px 0.4rem">
        <H3 color="white" weight="bold" size={1.5} margin="0px 0px 0.5rem 0px">
          {title1}
          <br />
          {title2}
        </H3>
        <Span color="white" size={0.8} weight="lighter">
          {sub1}
          <br />
          {sub2}
        </Span>
      </FlexContainer>
      <div>{/* <img alt="메인슬라이드" src={src} /> */}</div>
    </Container>
  );
}
