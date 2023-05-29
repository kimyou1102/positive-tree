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

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 12px;
  width: 1123.2px;
`;

export function MainItemList() {
  return (
    <Container>
      <MainItem src={icon1} bgColor="#EEF6B8" title="이용가이드" />
      <A url="/restaurant">
        <MainItem src={icon2} bgColor="#FAF0C5" title="맛집" />
      </A>
      <MainItem src={icon3} bgColor="#D6E6FF" title="여행" />
      <MainItem src={icon4} bgColor="#D7F5EE" title="뷰티" />
      <MainItem src={icon5} bgColor="#DAF1FB" title="문화" />
      <A url="/product">
        <MainItem src={icon6} bgColor="#DDF5D4" title="제품" />
      </A>
      <MainItem src={icon7} bgColor="#EEF6B8" title="광고 문의" />
    </Container>
  );
}
