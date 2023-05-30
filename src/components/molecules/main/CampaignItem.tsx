import React from 'react';
import styled from 'styled-components';
import { Span } from '@atoms';

interface CampaignItemProps {
  src: string;
  title: string;
  description: string;
}

const Container = styled.div`
  width: 19.2rem;
  border-radius: 15px;
  margin-right: calc(1.5rem * 0.8);

  .textWrap {
    display: flex;
    flex-direction: column;
  }
`;

const ImgWrap = styled.div`
  width: 19.2rem;
  height: 9.6rem;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
  }
`;

export function CampaignItem({ src, title, description }: CampaignItemProps) {
  return (
    <Container>
      <ImgWrap>
        <img src={src} alt="캠페인사진" />
      </ImgWrap>
      <div className="textWrap">
        <Span weight="bold" margin="0.4rem 0">
          {title}
        </Span>
        <Span size={0.875} color="#767676">
          {description}
        </Span>
      </div>
    </Container>
  );
}
