import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Section, Span, Img, FlexContainer } from '@atoms';
import { SideMenu, SectionTitle } from '@molecules';
import { Profile } from '@organisms';
import rightArrow from '../../../assets/images/blackRightArrow.png';

const Wrap = styled.div``;

const CampaignHeader = styled.div`
  border-bottom: 1px solid #999999;
  padding: calc(22px * 0.8) 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const InterestCampaignWrap = styled.div``;

const MyCampaignDiv = styled.div`
  min-height: 300px;
`;

export function MyPageDefault() {
  const campaignRequested = 0;
  const selectedCampaign = 0;
  const registeredCampaign = 0;
  const endCampaign = 0;

  const interestCampaign = 0;
  return (
    <>
      <div>
        <SectionTitle title="나의 캠페인" isMore />
        <CampaignHeader>
          <Span weight="bold">
            신청한 캠페인
            <Span color="red" weight="bold">
              {' '}
              {campaignRequested}
            </Span>
          </Span>
          <Img src={rightArrow} width={16} height={16} alt="다음화살표" />
          <Span weight="bold" color="#767676">
            선정된 캠페인
            <Span color="#767676" weight="bold">
              {' '}
              {selectedCampaign}
            </Span>
          </Span>
          <Img src={rightArrow} width={16} height={16} alt="다음화살표" />
          <Span weight="bold" color="#767676">
            등록한 캠페인
            <Span color="#767676" weight="bold">
              {' '}
              {registeredCampaign}
            </Span>
          </Span>
          <Img src={rightArrow} width={16} height={16} alt="다음화살표" />
          <Span weight="bold" color="#767676">
            종료된 캠페인
            <Span color="#767676" weight="bold">
              {' '}
              {endCampaign}
            </Span>
          </Span>
        </CampaignHeader>
        <MyCampaignDiv />
      </div>
      <InterestCampaignWrap>
        <SectionTitle title={`관심 캠페인 ,${interestCampaign} 개`} isMore />
        {interestCampaign === 0 ? (
          <FlexContainer align="center" justify="center" height={20}>
            <Span color="#767676">관심있는 캠페인을 하트를 눌러 추가해보세요</Span>
          </FlexContainer>
        ) : null}
      </InterestCampaignWrap>
    </>
  );
}
