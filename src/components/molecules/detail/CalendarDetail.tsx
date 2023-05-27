import React from 'react';
import styled from 'styled-components';
import CalendarDate from './CalendarDate';

interface CalendarDetailProps {
  year: number;
  month: number;
  lastDays: number[];
  currentDays: number[];
  nextDays: number[];
  requestStartDate: string;
  requestEndDate: string;
  registerStartDate: string;
  registerEndDate: string;
  resultDate: string;
}

const Container = styled.div`
  width: calc(18.625rem * 0.8);
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid #dbdbdb;
  box-sizing: border-box;
`;

const DatesDiv = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
`;

function CalendarDetail({
  year,
  month,
  lastDays,
  currentDays,
  nextDays,
  requestStartDate,
  requestEndDate,
  registerStartDate,
  registerEndDate,
  resultDate,
}: CalendarDetailProps) {
  function getDatesStartToLast(startDate: string, lastDate: string) {
    // const regex = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    // if (!(regex.test(startDate) && regex.test(lastDate))) return 'Not Date Format';
    const result = [];
    const curDate = new Date(startDate);
    while (curDate <= new Date(lastDate)) {
      result.push(curDate.toISOString().split('T')[0]);
      curDate.setDate(curDate.getDate() + 1);
    }
    return result;
  }

  const requestPeriod = getDatesStartToLast(requestStartDate, requestEndDate);
  const registerPeriod = getDatesStartToLast(registerStartDate, registerEndDate);
  //   console.log(requestPeriod, registerPeriod);

  const props = { year, requestPeriod, registerPeriod, resultDate };
  return (
    <Container>
      <DatesDiv>
        <CalendarDate dates={lastDays} {...props} month={month - 1} />
        <CalendarDate dates={currentDays} {...props} month={month} />
        <CalendarDate dates={nextDays} {...props} month={month + 1} />
      </DatesDiv>
    </Container>
  );
}

export default CalendarDetail;
