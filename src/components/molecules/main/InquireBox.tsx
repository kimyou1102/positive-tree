import React from 'react';
import styled from 'styled-components';
import { Span } from '@atoms';

const Container = styled.div`
  background: #17182d;
  width: 60rem;
  height: 9rem;
  display: flex;
  justify-content: space-between;
  padding: 2.6rem 3.75rem;
  border-radius: 24px;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
  margin-bottom: calc(6.75rem * 0.8);
  .inquireTextWrap {
    display: flex;
    flex-direction: column;
  }
`;

const Button = styled.button`
  background: linear-gradient(98deg, #febbe4 0%, #c0a3ff 100%);
  border-radius: 32px;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0rem 2rem;
  width: calc(12.5rem * 0.8);
  height: calc(3.75rem * 0.8);
`;

export function InquireBox() {
  return (
    <Container>
      <div className="inquireTextWrap">
        <Span size={1.125} color="white" margin="0 0 1rem 0">
          광고주님들을 위한 최고의 선택!
        </Span>
        <Span size={1.5} color="white" weight="bold">
          긍정나무와 함께 캠페인에 참여해주세요!
        </Span>
      </div>
      <Button>문의하러가기</Button>
    </Container>
  );
}
