import React from 'react';
import styled from 'styled-components';
import { Span } from '@atoms';
import { ContentDescription } from './ContentDescription';

interface ContentItemProps {
  src: string;
  rank: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

const Container = styled.div`
  width: calc(17.625rem * 0.9);
  display: flex;
  flex-direction: column;
  margin-right: 1.2rem;
`;

const ImgWrap = styled.div`
  display: flex;
  border-radius: 15px;
  flex-direction: columns;
  width: calc(17.625rem * 0.9);
  height: calc(17.625rem * 0.9);

  img {
    width: 100%;
    border-radius: 15px;
  }
`;

const RankWrap = styled.div`
  width: calc(1.6rem * 0.9);
  height: calc(1.6rem * 0.9);
  background-color: #febbe4;
  position: absolute;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function ContentItem({ src, rank, title, description, startDate, endDate }: ContentItemProps) {
  const props = { title, description, startDate, endDate };
  return (
    <Container>
      <ImgWrap>
        <img alt="아이템" src={src} />
      </ImgWrap>
      <RankWrap>
        <Span color="white" size={0.8}>
          {rank}
        </Span>
      </RankWrap>
      <ContentDescription {...props} />
    </Container>
  );
}
