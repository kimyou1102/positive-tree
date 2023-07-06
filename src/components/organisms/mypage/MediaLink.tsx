import React from 'react';
import styled from 'styled-components';
import { Span, FlexContainer } from '@atoms';

const MediaWrap = styled.div`
  margin-top: 13px;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
`;

const Input = styled.input`
  /* width: calc(282px * 0.8); */
  height: 32px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.16);
  border: none;
  border-radius: 8px;
  padding-left: 8px;
`;

export function MediaLink() {
  return (
    <div>
      <FlexContainer direction="column" gap="20px">
        <Span weight="bold" size={1.375}>
          미디어 연결
        </Span>
        <Span>[사용자명]님, 미디어를 연결해주세요</Span>
      </FlexContainer>
      <MediaWrap>
        <Input placeholder="블로그 연결하기" />
        <Input placeholder="인스타그램 연결하기" />
        <Input placeholder="유튜브 연결하기" />
      </MediaWrap>
    </div>
  );
}
