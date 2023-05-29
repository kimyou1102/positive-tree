import React from 'react';
import styled from 'styled-components';
import { Span, A } from '@atoms';
import { ListDescription } from '@molecules/list';
import { ContentDescription } from './ContentDescription';

interface ContentItemProps {
  id: number;
  category: string;
  type: string;
  src: string;
  rank?: number;
  title: string;
  description: string;
  applicationDateStart: string;
  applicationDateEnd: string;
  channel?: string;
}

const Container = styled.div<{ type: string }>`
  width: calc(17.625rem * 0.8);
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => (props.type === 'list' ? '0px' : '1.2rem')};
  cursor: pointer;
`;

const ImgWrap = styled.div`
  display: flex;
  border-radius: 15px;
  flex-direction: columns;
  width: calc(17.625rem * 0.8);
  height: calc(17.625rem * 0.8);

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
  top: 0px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function ContentItem({
  id,
  category,
  type,
  src,
  rank,
  title,
  description,
  channel,
  applicationDateStart,
  applicationDateEnd,
}: ContentItemProps) {
  console.log(type);
  const listProps = { title, description, applicationDateEnd, channel };
  const props = { title, description, applicationDateStart, applicationDateEnd };
  const url = category === '맛집' ? 'restaurant' : 'product';
  return (
    <Container type={type}>
      <A url={`${id}`}>
        <ImgWrap>
          <img alt="아이템" src={src} />
        </ImgWrap>
        {rank ? (
          <RankWrap>
            <Span color="white" size={0.8}>
              {rank}
            </Span>
          </RankWrap>
        ) : null}
        {type === 'list' ? <ListDescription {...listProps} /> : <ContentDescription {...props} />}
      </A>
    </Container>
  );
}
