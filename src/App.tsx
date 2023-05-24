import React from 'react';
import { Header, MainSlide, PopularCampaignSlide } from '@organisms';
import { MainSlideCard, MainItemList, ContentItem } from '@molecules';
import { useRecoilState } from 'recoil';
import logo from './assets/images/header_logo.png';
import food1 from './assets/images/food1.png';
import { PopularScrollState, CloseScrollState } from './recoil/main/scroll';

function App() {
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
      endDate: '2023.05.25',
      description: '파스타 1종류 + 안심 or 치즈 카츠 중 택 1 + 탄산음료 ',
      src: food1,
      rank: 2,
    },
    {
      id: 3,
      title: '[세종] 경양카츠 세종점',
      startDate: '2023.05.20',
      endDate: '2023.05.25',
      description: '파스타 1종류 + 안심 or 치즈 카츠 중 택 1 + 탄산음료 ',
      src: food1,
      rank: 3,
    },
    {
      id: 4,
      title: '[세종] 경양카츠 세종점',
      startDate: '2023.05.20',
      endDate: '2023.05.25',
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
    <div className="App">
      <Header />
      <div style={{ marginTop: '38.4px' }}>
        <MainSlide />
      </div>
      <div style={{ marginTop: '51px', marginBottom: '67.2px' }}>
        <MainItemList />
      </div>

      <div style={{ paddingLeft: '18rem', marginBottom: '80px' }}>
        <div style={{ marginBottom: '72px' }}>
          <PopularCampaignSlide datas={test} title="지금 인기있는 캠페인" scroll={scroll} setScroll={setScroll} />
        </div>

        <PopularCampaignSlide datas={test} title="마감임박 캠페인" scroll={scroll2} setScroll={setScroll2} />
      </div>
      <div style={{ height: '244.8px', borderTop: '1px solid #DBDBDB' }}>.</div>
    </div>
  );
}

export default App;
