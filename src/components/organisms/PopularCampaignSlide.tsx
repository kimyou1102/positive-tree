import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ContentItem } from '@molecules';
import { ArrowButton, SlideContainer, Span, A, FlexContainer } from '@atoms';
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
  applicationDateStart: string;
  applicationDateEnd: string;
  category: string;
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
      <FlexContainer width={75} justify="space-between" align="center">
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
        <Span size={0.875} weight="bold">
          <A url="#">전체보기</A>
        </Span>
      </FlexContainer>
      <div style={{ position: 'relative' }}>
        <ArrowButton type="left top" src={leftArrow} onClick={onLeftClick} top="calc(17.625rem * 0.9 / 2)" />
        <ArrowButton
          type="left top"
          src={rightArrow}
          onClick={onRightClick}
          top="calc(17.625rem * 0.9 / 2)"
          left="60rem"
        />
        <SlideContainer ref={scrollRef}>
          {datas.map((data) => (
            <ContentItem
              id={data.id}
              category={data.category}
              type="main"
              src={data.src}
              key={data.id}
              rank={data.rank}
              title={data.title}
              description={data.description}
              applicationDateStart={data.applicationDateStart}
              applicationDateEnd={data.applicationDateEnd}
            />
          ))}
        </SlideContainer>
      </div>
    </>
  );
}
