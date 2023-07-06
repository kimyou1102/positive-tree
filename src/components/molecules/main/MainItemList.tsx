import React from 'react';
import styled from 'styled-components';
import { A } from '@atoms';
import { MainItem } from './MainItem';

import icon1 from '../../../assets/images/item1.png';
import icon2 from '../../../assets/images/icon2.png';
import icon3 from '../../../assets/images/icon3.png';
import icon4 from '../../../assets/images/icon4.png';
import icon5 from '../../../assets/images/icon5.png';
import icon6 from '../../../assets/images/icon6.png';
import icon7 from '../../../assets/images/icon7.png';
import icon8 from '../../../assets/images/icon8.png';
import icon9 from '../../../assets/images/icon9.png';
import icon10 from '../../../assets/images/icon10.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function MainItemList() {
  return (
    <Container>
      <MainItem imgWidth={52} imgHeight={49} src={icon1} title="맛집" />
      <A url="/restaurant">
        <MainItem imgWidth={53} imgHeight={46} src={icon2} title="뷰티" />
      </A>
      <MainItem imgWidth={54} imgHeight={30} src={icon3} title="배송" />
      <MainItem imgWidth={52} imgHeight={49} src={icon4} title="문화" />
      <MainItem imgWidth={52} imgHeight={36} src={icon5} title="배달" />
      <A url="/product">
        <MainItem imgWidth={55} imgHeight={49} src={icon6} title="포인트" />
      </A>
      <MainItem imgWidth={60} imgHeight={60} src={icon7} title="기자단" />
      <MainItem imgWidth={55} imgHeight={50} src={icon8} title="기타체험" />
      <MainItem imgWidth={49} imgHeight={51} src={icon9} title="광고문의" />
      <MainItem imgWidth={50} imgHeight={50} src={icon10} title="이용가이드" />
    </Container>
  );
}
