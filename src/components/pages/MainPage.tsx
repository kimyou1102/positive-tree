import React from 'react';
import styled from 'styled-components';
import { MainItemList, InquireBox } from '@molecules';
import { MainSlide, PopularCampaignSlide, Footer, HighlyCampaign } from '@organisms';
import { useRecoilState } from 'recoil';
import food1 from '../../assets/images/food1.png';
import { PopularScrollState, CloseScrollState } from '../../recoil/main/scroll';

const Campaignwrap = styled.div`
  margin-bottom: 4.5rem;
`;

export function MainPage() {
  const test = [
    {
      id: 1,
      title: '[세종] 경양카츠 세종점',
      startDate: '2023.05.20',
      endDate: '2023.05.24',
      description: '파스타 1종류 + 안심 or 치즈 카츠 중 택 1 + 탄산음료 ',
      src: food1,
      rank: 1,
    },
    {
      id: 2,
      title: '[세종] 경양카츠 세종점',
      startDate: '2023.05.20',
      endDate: '2023.05.27',
      description: '파스타 1종류 + 안심 or 치즈 카츠 중 택 1 + 탄산음료 ',
      src: food1,
      rank: 2,
    },
    {
      id: 3,
      title: '[세종] 경양카츠 세종점',
      startDate: '2023.05.20',
      endDate: '2023.05.26',
      description: '파스타 1종류 + 안심 or 치즈 카츠 중 택 1 + 탄산음료 ',
      src: food1,
      rank: 3,
    },
    {
      id: 4,
      title: '[세종] 경양카츠 세종점',
      startDate: '2023.05.20',
      endDate: '2023.05.31',
      description: '파스타 1종류 + 안심 or 치즈 카츠 중 택 1 + 탄산음료 ',
      src: food1,
      rank: 4,
    },
    {
      id: 5,
      title: '[세종] 경양카츠 세종점',
      startDate: '2023.05.20',
      endDate: '2023.05.25',
      description: '파스타 1종류 + 안심 or 치즈 카츠 중 택 1 + 탄산음료 ',
      src: food1,
      rank: 5,
    },
    {
      id: 6,
      title: '[세종] 경양카츠 세종점',
      startDate: '2023.05.20',
      endDate: '2023.05.25',
      description: '파스타 1종류 + 안심 or 치즈 카츠 중 택 1 + 탄산음료 ',
      src: food1,
      rank: 6,
    },
  ];
  const [scroll, setScroll] = useRecoilState<HTMLDivElement | undefined>(PopularScrollState);
  const [scroll2, setScroll2] = useRecoilState<HTMLDivElement | undefined>(CloseScrollState);

  return (
    <>
      <div style={{ marginTop: '38.4px' }}>
        <MainSlide />
      </div>

      <div style={{ width: 'calc(100% - ((100% - 60rem)/2))', margin: '0 0 0 auto', paddingLeft: '3rem' }}>
        <div style={{ marginTop: '51px', marginBottom: '67.2px' }}>
          <MainItemList />
        </div>
        <Campaignwrap>
          <PopularCampaignSlide datas={test} title="지금 인기있는 캠페인" scroll={scroll} setScroll={setScroll} />
        </Campaignwrap>
        <Campaignwrap>
          <PopularCampaignSlide datas={test} title="마감임박,캠페인" scroll={scroll2} setScroll={setScroll2} />
        </Campaignwrap>

        <HighlyCampaign title="선정확률 높은,캠페인" />
      </div>
      <div style={{ padding: '0 3rem', marginTop: 'calc(4.563rem * 0.8)' }}>
        <InquireBox />
      </div>
      <Footer />
    </>
  );
}
