import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CalendarHeader from './CalendarHeader';
import CalendarDetail from './CalendarDetail';

interface CalendarProps {
  requestStartDate: string;
  requestEndDate: string;
  registerStartDate: string;
  registerEndDate: string;
  resultDate: string;
}

const Container = styled.div`
  width: calc(21rem * 0.8);
  margin-top: 1.3rem;
  padding: 1.5rem 0;
  background: #ffffff;
  border-radius: 16px;
`;

export function Calendar({
  requestStartDate,
  requestEndDate,
  registerStartDate,
  registerEndDate,
  resultDate,
}: CalendarProps) {
  const requestStart = new Date(requestStartDate);
  const requestEnd = new Date(requestEndDate);
  const registerStart = new Date(registerStartDate);
  const registerEnd = new Date(registerEndDate);
  const result = new Date(resultDate);

  const [lastDayNum, setLastDayNum] = useState(0);
  const [lastDay, setLastDay] = useState(0);
  const [lastDays, setLastDays] = useState<number[]>([]);
  const [currentLastDay, setCurrentLastDay] = useState(0);
  const [currentDays, setCurrertDays] = useState<number[]>([]);
  const [currentYear, setCurrentYear] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [nextDays, setNextDays] = useState<number[]>([]);

  const renderDates = (date: Date) => {
    const renderCurrentYear = date.getFullYear();
    setCurrentYear(renderCurrentYear);
    const renderCurrentMonth = date.getMonth();
    setCurrentMonth(renderCurrentMonth + 1);
    const lastEndDay = new Date(renderCurrentYear, renderCurrentMonth, 0);
    const currentEndDay = new Date(renderCurrentYear, renderCurrentMonth + 1, 0);
    const nextLastDay = currentEndDay.getDay();
    setNextDays(Array.from({ length: 6 - nextLastDay }, (_v, i) => i + 1));
    setCurrentLastDay(currentEndDay.getDate());
    setLastDayNum(lastEndDay.getDay());
    setLastDay(lastEndDay.getDate());
  };

  useEffect(() => {
    const today = new Date(requestStartDate);
    renderDates(today);
  }, [requestStartDate]);

  useEffect(() => {
    setLastDays(Array.from({ length: lastDayNum + 1 }, (v, i) => i + lastDay - lastDayNum));
  }, [lastDayNum, lastDay]);

  useEffect(() => {
    setCurrertDays(Array.from({ length: currentLastDay }, (v, i) => i + 1));
  }, [currentLastDay]);

  const next = () => {
    const date = new Date(currentYear, currentMonth, 1);
    renderDates(date);
  };

  const before = () => {
    const date = new Date(currentYear, currentMonth - 2, 1);
    renderDates(date);
  };

  const detailProps = {
    lastDays,
    currentDays,
    nextDays,
    requestStartDate,
    requestEndDate,
    registerStartDate,
    registerEndDate,
    resultDate,
  };

  return (
    <Container>
      <div style={{ width: 'calc(18.625rem * 0.8)', margin: '0 auto' }}>
        <CalendarHeader year={currentYear} month={currentMonth} before={before} next={next} />
        <CalendarDetail year={currentYear} month={currentMonth} {...detailProps} />
      </div>
    </Container>
  );
}
