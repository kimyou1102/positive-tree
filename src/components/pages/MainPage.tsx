import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainItemList, InquireBox } from '@molecules';
import { MainSlide, PopularCampaignSlide, Footer, HighlyCampaign } from '@organisms';
import { useRecoilState } from 'recoil';
import { ListType } from 'src/models/posts';
import { getPosts } from '../../apis/post/get-posts-api';
import food1 from '../../assets/images/food1.png';
import { PopularScrollState, CloseScrollState } from '../../recoil/main/scroll';

const Campaignwrap = styled.div`
  margin-bottom: 4.5rem;
`;

export function MainPage() {
  const [posts, setPosts] = useState<ListType[]>([]);

  const api = async () => {
    await getPosts().then((res) => {
      setPosts(res.list);
    });
  };

  useEffect(() => {
    api();
  }, []);

  // const test = [
  //   {
  //     id: 1,
  //     title: '[세종] 경양카츠 세종점',
  //     applicationDateStart: '2023.05.20',
  //     applicationDateEnd: '2023.05.24',
  //     category: '맛집',
  //     description: '파스타 1종류 + 안심 or 치즈 카츠 중 택 1 + 탄산음료 ',
  //     src: food1,
  //     rank: 1,
  //   },
  //   {
  //     id: 2,
  //     title: '[세종] 경양카츠 세종점',
  //     applicationDateStart: '2023.05.20',
  //     applicationDateEnd: '2023.05.27',
  //     category: '맛집',
  //     description: '파스타 1종류 + 안심 or 치즈 카츠 중 택 1 + 탄산음료 ',
  //     src: food1,
  //     rank: 2,
  //   },
  //   {
  //     id: 3,
  //     title: '[세종] 경양카츠 세종점',
  //     applicationDateStart: '2023.05.20',
  //     applicationDateEnd: '2023.05.26',
  //     category: '맛집',
  //     description: '파스타 1종류 + 안심 or 치즈 카츠 중 택 1 + 탄산음료 ',
  //     src: food1,
  //     rank: 3,
  //   },
  //   {
  //     id: 4,
  //     title: '[세종] 경양카츠 세종점',
  //     applicationDateStart: '2023.05.20',
  //     applicationDateEnd: '2023.05.31',
  //     category: '맛집',
  //     description: '파스타 1종류 + 안심 or 치즈 카츠 중 택 1 + 탄산음료 ',
  //     src: food1,
  //     rank: 4,
  //   },
  //   {
  //     id: 5,
  //     title: '[세종] 경양카츠 세종점',
  //     applicationDateStart: '2023.05.20',
  //     applicationDateEnd: '2023.05.25',
  //     category: '맛집',
  //     description: '파스타 1종류 + 안심 or 치즈 카츠 중 택 1 + 탄산음료 ',
  //     src: food1,
  //     rank: 5,
  //   },
  //   {
  //     id: 6,
  //     title: '[세종] 경양카츠 세종점',
  //     applicationDateStart: '2023.05.20',
  //     applicationDateEnd: '2023.05.25',
  //     category: '맛집',
  //     description: '파스타 1종류 + 안심 or 치즈 카츠 중 택 1 + 탄산음료 ',
  //     src: food1,
  //     rank: 6,
  //   },
  // ];
  const [scroll, setScroll] = useRecoilState<HTMLDivElement | undefined>(PopularScrollState);
  const [scroll2, setScroll2] = useRecoilState<HTMLDivElement | undefined>(CloseScrollState);

  return (
    <>
      <div style={{ marginTop: '38.4px' }}>
        <MainSlide />
      </div>

      <div style={{ width: '60rem', margin: '0 auto', padding: '0 3rem' }}>
        <div style={{ marginTop: '51px', marginBottom: '67.2px' }}>
          <MainItemList />
        </div>
        <Campaignwrap>
          <PopularCampaignSlide datas={posts} title="지금 인기있는 캠페인" scroll={scroll} setScroll={setScroll} />
        </Campaignwrap>
        <Campaignwrap>
          <PopularCampaignSlide datas={posts} title="마감임박,캠페인" scroll={scroll2} setScroll={setScroll2} />
        </Campaignwrap>

        <HighlyCampaign datas={posts} title="선정확률 높은,캠페인" />
      </div>
      <div style={{ padding: '0 3rem', marginTop: 'calc(4.563rem * 0.8)' }}>
        <InquireBox />
      </div>
      <Footer />
    </>
  );
}
