import styled from 'styled-components';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowButton } from '@atoms';
import { MainSlideCard } from '@molecules';
import logo from '../../assets/images/header_logo.png';
import leftArrow from '../../assets/images/leftArrow.png';
import righttArrow from '../../assets/images/rightArrow.png';

const datas = [
  { id: 1, title: 'LEVEL, UP', sub: '나를 성장시킨,한 마디', src: logo, color: '#164D98' },
  { id: 2, title: '레뷰, BINGO', sub: '빙고판 완성하고,샘플도 챙겨가세요!', src: logo, color: '#A86DF3' },
  { id: 3, title: '레뷰, 커뮤니티 이벤트', sub: '회원님의 이야기를,들려주세요!', src: logo, color: '#353535' },
  { id: 4, title: '예약 없이, 방문 하기', sub: '전화 걱정 없이,쉽게 방문해보세요!', src: logo, color: '#FF975A' },
  { id: 5, title: '예약 없이, 방문 하기', sub: '속 시원하게,해결하기!', src: logo, color: '#7198FD' },
  { id: 6, title: '예약 없이, 방문 하기', sub: '속 시원하게,해결하기!', src: logo, color: '#7198FD' },
  { id: 7, title: '예약 없이, 방문 하기', sub: '속 시원하게,해결하기!', src: logo, color: '#7198FD' },
  { id: 8, title: '예약 없이, 방문 하기', sub: '속 시원하게,해결하기!', src: logo, color: '#7198FD' },
  { id: 9, title: '예약 없이, 방문 하기', sub: '속 시원하게,해결하기!', src: logo, color: '#7198FD' },
];

const Box = styled.div`
  background-color: tomato;
  border: 1px solid black;
`;

export function MainSlide() {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: '260px',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: <ArrowButton type="left" src={leftArrow} left="260px" />,
    nextArrow: <ArrowButton type="right" src={righttArrow} right="260px" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '100px',
          dots: false,
          prevArrow: <ArrowButton type="left" src={leftArrow} left="100px" />,
          nextArrow: <ArrowButton type="right" src={righttArrow} right="100px" />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: '100px',
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '0px',
          slidesToShow: 1,
          prevArrow: <ArrowButton type="left" src={leftArrow} left="0px" />,
          nextArrow: <ArrowButton type="right" src={righttArrow} right="0px" />,
        },
      },
    ],
  };
  //   const settings = {
  //     className: 'center',
  //     centerMode: true,
  //     dots: true,
  //     loop: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     // autoplay: true,
  //     // autoplaySpeed: 3000,
  //     arrows: true,
  //     centerPadding: '60px',
  //     // prevArrow: <PrevArrow />,
  //     // nextArrow: <NextArrow />,
  //     // eslint-disable-next-line react/no-unstable-nested-components

  //     // dotsClass: 'dots_custom',
  //   };
  return (
    <Slider {...settings}>
      {datas.map((data) => (
        <MainSlideCard key={data.id} title={data.title} sub={data.sub} src={data.src} bgColor={data.color} />
      ))}
    </Slider>
  );
}
