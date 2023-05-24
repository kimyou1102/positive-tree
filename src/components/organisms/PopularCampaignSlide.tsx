import React, { useRef, useEffect } from 'react';
import { ContentItem } from '@molecules';
import { ArrowButton, SlideContainer } from '@atoms';
import { useRecoilState } from 'recoil';
import Slider from 'react-slick';
import { PopularScrollState } from '../../recoil/main/scroll';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import leftArrow from '../../assets/images/leftArrow.png';
import rightArrow from '../../assets/images/rightArrow.png';
import food1 from '../../assets/images/food1.png';

type DataType = {
  id: number;
  src: string;
  rank: number;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
};

interface PopularCampaignSlideProps {
  datas: DataType[];
  title: string;
  scroll: HTMLDivElement | undefined;
  setScroll: any;
}

// export function PopularCampaignSlide({ title, scroll, setScroll }:) {
export function PopularCampaignSlide({ datas, title, scroll, setScroll }: PopularCampaignSlideProps) {
  //   const [scroll, setScroll] = useRecoilState<HTMLDivElement | undefined>(PopularScrollState);

  const scrollRef = useRef<HTMLDivElement>(null);

  console.log(scrollRef);

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      setScroll(scrollRef.current);
    }
  }, [setScroll]);

  const onLeftClick = () => {
    if (scroll) {
      scroll.scrollBy({ left: -600, top: 0, behavior: 'smooth' });
    }
  };

  const onRightClick = () => {
    if (scroll) {
      scroll.scrollBy({ left: 600, top: 0, behavior: 'smooth' });
    }
  };

  // 1.2rem

  return (
    <div>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{title}</p>
      <div style={{ position: 'relative' }}>
        <ArrowButton type="left" src={leftArrow} onClick={onLeftClick} top="calc(17.625rem * 0.9 / 2)" />
        <ArrowButton type="right" src={rightArrow} onClick={onRightClick} top="calc(17.625rem * 0.9 / 2)" />
        <SlideContainer ref={scrollRef}>
          {/* <ContentItem {...test} />
          <ContentItem {...test} />
          <ContentItem {...test} />
          <ContentItem {...test} />
          <ContentItem {...test} />
          <ContentItem {...test} />
          <ContentItem {...test} />
          <ContentItem {...test} /> */}
          {datas.map((data) => (
            <ContentItem
              src={data.src}
              key={data.id}
              rank={data.rank}
              title={data.title}
              description={data.description}
              startDate={data.startDate}
              endDate={data.endDate}
            />
          ))}
        </SlideContainer>
      </div>
    </div>
  );
}
