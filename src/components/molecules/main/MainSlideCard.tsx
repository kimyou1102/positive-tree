import React from 'react';
import styled from 'styled-components';

interface MainSlideCardProps {
  src: string;
}

const Container = styled.div`
  width: calc(384px * 0.8);
  height: calc(250px 0.8);
  border-radius: 20px;

  img {
    width: calc(384px * 0.8);
    height: calc(250px 0.8);
    border-radius: 20px;
  }
`;

export function MainSlideCard({ src }: MainSlideCardProps) {
  return (
    <Container>
      <img src={src} alt="메인슬라이드" />
    </Container>
  );
}
