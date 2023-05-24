import React from 'react';
import styled from 'styled-components';
import { FlexContainer, Span } from '@atoms';

interface ContentDescriptionProps {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

const Dday = styled.div<{ check: boolean }>`
  background: ${(props) => (props.check ? 'linear-gradient(98deg, #FEBBE4 0%, #C0A3FF 100%);' : '#542a01')};
  border-radius: 15px;
  width: calc(4rem * 0.8);
  height: calc(1.5rem * 0.8);
  font-size: 0.75rem;
  color: ${(props) => (props.check ? 'black' : 'white')};
  padding: 0.25rem 0.55rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.25rem 0;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

export function ContentDescription({ title, description, startDate, endDate }: ContentDescriptionProps) {
  const today = new Date();
  const compareDay = new Date(endDate);
  console.log(today, compareDay);

  const isSameDate = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  const check = isSameDate(today, compareDay);

  return (
    <FlexContainer direction="column">
      <Dday check={check}>
        <Span size={0.75} color="white">
          {check ? '오늘마감' : 'D-2'}
        </Span>
      </Dday>
      <Title>{title}</Title>
      <Span size={0.75} margin="0 0 0.8rem 0">
        {description}
      </Span>
      <Span size={0.625}>
        캠페인 신청기간{startDate}~{endDate}
      </Span>
    </FlexContainer>
  );
}
