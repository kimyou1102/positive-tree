import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ContentItem } from '@molecules';
import { ArrowButton, SlideContainer, Span } from '@atoms';
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

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

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

  const [title1, title2] = title.split(',');

  return (
    <>
      {title === '지금 인기있는 캠페인' ? (
        <Text>{title}</Text>
      ) : (
        <Text>
          <Span color="#EA9DCC" size={1.5} weight="bold">
            {`${title1} `}
          </Span>
          <Span size={1.5} weight="bold">
            {title2}
          </Span>
        </Text>
      )}

      <div style={{ position: 'relative' }}>
        <ArrowButton type="left" src={leftArrow} onClick={onLeftClick} top="calc(17.625rem * 0.9 / 2)" />
        <ArrowButton type="right" src={rightArrow} onClick={onRightClick} top="calc(17.625rem * 0.9 / 2)" />
        <SlideContainer ref={scrollRef}>
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
    </>
  );
}
