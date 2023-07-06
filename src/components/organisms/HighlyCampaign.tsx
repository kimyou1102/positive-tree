import React, { useRef } from 'react';
import styled from 'styled-components';
import { ArrowButton, SlideContainer, Span, A, FlexContainer, PhotoSlideWrap } from '@atoms';
import { CampaignItem } from '@molecules';
import { ListType } from 'src/models/posts';
import photo from '../../assets/images/campaign.png';
import photo2 from '../../assets/images/campaign2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import leftArrow from '../../assets/images/leftArrow.png';
import rightArrow from '../../assets/images/rightArrow.png';

interface HighlyCampaignProps {
  datas: ListType[];
  title: string;
}

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export function HighlyCampaign({ datas, title }: HighlyCampaignProps) {
  console.log(datas);
  const [title1, title2] = title.split(',');
  const test = [
    { id: 1, src: photo, title: '가족과는 좋은 것만 누려요', description: '긍정나무가 제안하는 맛집 캠페인' },
    { id: 2, src: photo2, title: '가족과는 좋은 것만 누려요', description: '긍정나무가 제안하는 맛집 캠페인' },
    { id: 3, src: photo, title: '가족과는 좋은 것만 누려요', description: '긍정나무가 제안하는 맛집 캠페인' },
    { id: 4, src: photo2, title: '가족과는 좋은 것만 누려요', description: '긍정나무가 제안하는 맛집 캠페인' },
    { id: 5, src: photo2, title: '가족과는 좋은 것만 누려요', description: '긍정나무가 제안하는 맛집 캠페인' },
    { id: 6, src: photo2, title: '가족과는 좋은 것만 누려요', description: '긍정나무가 제안하는 맛집 캠페인' },
    { id: 7, src: photo, title: '가족과는 좋은 것만 누려요', description: '긍정나무가 제안하는 맛집 캠페인' },
    { id: 8, src: photo, title: '가족과는 좋은 것만 누려요', description: '긍정나무가 제안하는 맛집 캠페인' },
    { id: 9, src: photo, title: '가족과는 좋은 것만 누려요', description: '긍정나무가 제안하는 맛집 캠페인' },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const onLeftClick = () => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, top: 0, behavior: 'smooth' });
    }
  };

  const onRightClick = () => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, top: 0, behavior: 'smooth' });
    }
  };
  return (
    <>
      <FlexContainer width={75} justify="space-between" align="center">
        <Text>
          <Span color="#EA9DCC" size={1.5} weight="bold">
            {`${title1} `}
          </Span>
          <Span size={1.5} weight="bold">
            {title2}
          </Span>
        </Text>
        <Span size={0.875} weight="bold">
          <A url="#">전체보기</A>
        </Span>
      </FlexContainer>
      <PhotoSlideWrap>
        <ArrowButton type="left top" src={leftArrow} onClick={onLeftClick} top="calc( 9.6rem  / 2)" />
        <ArrowButton
          type="right top"
          src={rightArrow}
          onClick={onRightClick}
          top="calc( 9.6rem / 2)"
          right="0px"
          transform="translate(50%, -50%)"
        />
        <SlideContainer ref={scrollRef}>
          {datas.map((item) => (
            <CampaignItem
              key={item.id}
              // src={item.postImages[0].image}
              src={item.postImages.length === 0 ? '' : item.postImages[0].image}
              title={item.title}
              description={item.description}
            />
          ))}
        </SlideContainer>
      </PhotoSlideWrap>
    </>
  );
}
