import React from 'react';
import styled from 'styled-components';

interface CalendarDateProps {
  year: number;
  month: number;
  dates: number[];
  requestPeriod: string[];
  registerPeriod: string[];
  resultDate: string;
}

const DateWrapWrap = styled.div`
  width: calc(100% / 7);
  /* position: relative;
  box-sizing: border-box;
  width: calc(100% / 7);
  height: calc(3.438rem * 0.8);
  text-align: left;
  border-bottom: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb; */
`;

const DateWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  /* width: calc(100% / 7); */
  height: calc(3.438rem * 0.8);
  text-align: left;
  border-bottom: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
`;

const DateDiv = styled.div`
  display: flex;
  justify-content: right;
  padding: 0.25rem;
`;

const DateText = styled.span`
  font-size: 0.625rem;
  font-weight: bold;
`;

const Highlight = styled.div<{ bgColor: string; color: string; width?: string }>`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  width: ${(props) => (props.width ? props.width : '100%')};
  border-right: ${(props) => `1px solid ${props.bgColor}`};
  height: calc(1.2rem);
  font-size: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function CalendarDate({ year, month, dates, requestPeriod, registerPeriod, resultDate }: CalendarDateProps) {
  const compareMonth = month < 10 ? `0${month}` : month;

  return (
    <>
      {dates.map((date) => (
        <DateWrapWrap key={date}>
          <DateWrap>
            <DateDiv>
              <DateText>{date}</DateText>
            </DateDiv>
            {requestPeriod.map((periodDate) =>
              `${year}-${compareMonth}-${date < 10 ? `0${date}` : date}` === periodDate ? (
                <Highlight key={periodDate} bgColor="#09544F" color="white" />
              ) : null,
            )}
            {registerPeriod.map((periodDate) =>
              `${year}-${compareMonth}-${date < 10 ? `0${date}` : date}` === periodDate ? (
                <Highlight key={periodDate} bgColor="#FEBBE4" color="black" />
              ) : null,
            )}
            {`${year}-${compareMonth}-${date}` === resultDate ? (
              <Highlight bgColor="#542A01" color="white">
                결과
              </Highlight>
            ) : null}
          </DateWrap>
        </DateWrapWrap>
      ))}
    </>
  );
}

export default CalendarDate;

// 6월 1일
// 비키 사용자 & 어드민 -> 6월 8일
// 상영작 관리 시간표, 공지사항은 머.....
