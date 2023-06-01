import React from 'react';
import styled from 'styled-components';
import { Span } from '@atoms';
import { Calendar } from '@molecules';
import { useRecoilState } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { modalState } from '../../store/detail/modal';
import { createCampaign } from '../../apis/campaign/create-campaign-api';

interface DetailSideProps {
  requestStartDate: string;
  requestEndDate: string;
  registerStartDate: string;
  registerEndDate: string;
  resultDate: string;
  setTop: React.Dispatch<React.SetStateAction<number>>;
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
  setTop,
}: DetailSideProps) {
  const props = {
    requestStartDate,
    requestEndDate,
    registerStartDate,
    registerEndDate,
    resultDate,
  };
  const [modal, setModal] = useRecoilState(modalState);
  const [cookies, setCookie] = useCookies(['access_token']);
  const navigate = useNavigate();
  const { id } = useParams();

  const createCampaignApi = async () => {
    await createCampaign(parseInt(id!, 10), cookies.access_token)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const onClick = () => {
    if (cookies.access_token) {
      createCampaignApi();
      setTop(window.scrollY);
      setModal(true);
      document.querySelector('body')?.classList.add('none');
    } else {
      alert('로그인을 해주세요.');
      navigate('/login');
    }
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
      <Button onClick={onClick}>캠페인 신청하기</Button>
    </Container>
  );
}
