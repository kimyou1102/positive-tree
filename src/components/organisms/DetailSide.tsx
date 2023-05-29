import React from 'react';
import styled from 'styled-components';
import { Span } from '@atoms';
import { Calendar } from '@molecules';

interface DetailSideProps {
  requestStartDate: string;
  requestEndDate: string;
  registerStartDate: string;
  registerEndDate: string;
  resultDate: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 1.5rem;
  float: right;
`;

const CalendarSectionWrap = styled.div`
  width: calc(24rem * 0.8);
  background: #f5e8f0;
  border-radius: 16px;
  padding: calc(1.5rem * 0.8);
  box-sizing: border-box;
`;

const Button = styled.button`
  width: calc(24rem * 0.8);
  height: calc(4rem * 0.8);
  background: linear-gradient(98deg, #febbe4 0%, #c0a3ff 100%);
  border-radius: 16px;
  border: none;
  margin-top: calc(1.5rem * 0.8);
  font-size: calc(1.5rem * 0.8);
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const InfoWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.6rem;
  width: 13rem;
`;

const TextWrap = styled.div<{ bgColor: string }>`
  display: flex;
  align-items: center;

  div {
    width: 20px;
    height: 20px;
    background: ${(props) => props.bgColor};
    margin-right: 5px;
  }
`;

export function DetailSide({
  requestStartDate,
  requestEndDate,
  registerStartDate,
  registerEndDate,
  resultDate,
}: DetailSideProps) {
  const props = {
    requestStartDate,
    requestEndDate,
    registerStartDate,
    registerEndDate,
    resultDate,
  };
  return (
    <Container>
      <CalendarSectionWrap>
        <InfoWrap>
          <TextWrap bgColor="rgb(9, 84, 79)">
            <div />
            <Span size={0.875}>신청기간</Span>
          </TextWrap>
          <Span size={0.875}>{`${requestStartDate.slice(5).replace('-', '.')} ~ ${requestEndDate
            .slice(5)
            .replace('-', '.')}`}</Span>
          <TextWrap bgColor="rgb(254, 187, 228)">
            <div />
            <Span size={0.875}>체험기간</Span>
          </TextWrap>
          <Span size={0.875}>{`${registerStartDate.slice(5).replace('-', '.')} ~ ${registerEndDate
            .slice(5)
            .replace('-', '.')}`}</Span>
          <TextWrap bgColor="rgb(84, 42, 1)">
            <div />
            <Span size={0.875}>결과발표</Span>
          </TextWrap>
          <Span size={0.875}>{`${resultDate.slice(5).replace('-', '.')}`}</Span>
        </InfoWrap>
        <Calendar {...props} />
      </CalendarSectionWrap>
      <Button>캠페인 신청하기</Button>
    </Container>
  );
}
