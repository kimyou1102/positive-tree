import React, { useRef } from 'react';
import styled from 'styled-components';
import { ArrowButton, SlideContainer } from '@atoms';
import leftArrow from '../../../assets/images/leftArrow.png';
import rightArrow from '../../../assets/images/rightArrow.png';

type DataType = {
  id: number;
  src: string;
};

interface PhotoSlideProps {
  datas: DataType[];
}

const Img = styled.img`
  width: calc(24rem * 0.8);
  height: calc(20.625rem * 0.8);
  border-radius: 24px;
  margin-right: calc(1.5rem * 0.8);
`;

export function PhotoSlide({ datas }: PhotoSlideProps) {
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
    <div style={{ position: 'relative' }}>
      <ArrowButton type="left" src={leftArrow} onClick={onLeftClick} top="calc(20.625rem * 0.8/ 2)" />
      <ArrowButton type="right" src={rightArrow} onClick={onRightClick} top="calc(20.625rem * 0.8/ 2)" />
      <SlideContainer ref={scrollRef}>
        {datas.map((data) => (
          <Img key={data.id} alt="사진" src={data.src} />
        ))}
      </SlideContainer>
    </div>
  );
}
