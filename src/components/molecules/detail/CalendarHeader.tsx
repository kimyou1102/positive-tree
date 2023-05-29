import React from 'react';
import styled from 'styled-components';
import left from '../../../assets/images/left_icon.png';
import right from '../../../assets/images/right_icon.png';

interface Props {
  year: number;
  month: number;
  before: () => void;
  next: () => void;
}

const HeaderDiv = styled.div`
  flex-direction: column;
  display: flex;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;

const YearAndMonthText = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
`;

const MonthMoveBtn = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  color: #6c757d;
  cursor: pointer;
`;

const TodayBtn = styled.button`
  width: calc(0.5rem * 0.8);
  height: calc(0.5rem * 0.8);
  margin: 0px 0.5rem;
  border-radius: 50%;
  background: #767676;
  border: none;
  padding: 0px;
`;

const Week = styled.div`
  display: flex;
  height: calc(1.5rem * 0.8);
  align-items: center;
  border: 1px solid #dbdbdb;
`;

const Day = styled.div`
  width: calc(100% / 7);
  height: 100%;
  text-align: center;
  border-right: 1px solid #dbdbdb;

  &:nth-child(7) {
    border-right: none;
  }
`;

const DayText = styled.span`
  font-size: 0.625rem;
  font-weight: 600;
`;

const Img = styled.img`
  width: calc(6px * 0.8);
  height: calc(10px * 0.8);
`;

function CalendarHeader({ year, month, before, next }: Props) {
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  return (
    <HeaderDiv id="header">
      <Header>
        <YearAndMonthText>
          {year}년 {month}월
        </YearAndMonthText>
        <div>
          <MonthMoveBtn onClick={before}>
            <Img src={left} alt="왼쪽화살표" />
          </MonthMoveBtn>
          <TodayBtn />
          <MonthMoveBtn onClick={next}>
            <Img src={right} alt="오른쪽화살표" />
          </MonthMoveBtn>
        </div>
      </Header>
      <Week>
        {weeks.map((week) => (
          <Day key={week}>
            <DayText>{week}</DayText>
          </Day>
        ))}
      </Week>
    </HeaderDiv>
  );
}

export default CalendarHeader;
