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
import mainSlide1 from '../../assets/images/main_slide1.png';
import mainSlide2 from '../../assets/images/main_slide2.png';
import mainSlide3 from '../../assets/images/main_slide3.png';
import mainSlide4 from '../../assets/images/main_slide4.png';
import mainSlide5 from '../../assets/images/main_slide5.png';

const datas = [
  { id: 1, src: mainSlide1 },
  { id: 2, src: mainSlide2 },
  { id: 3, src: mainSlide3 },
  { id: 4, src: mainSlide4 },
  { id: 5, src: mainSlide5 },
];

const Box = styled.div`
  background-color: tomato;
  border: 1px solid black;
`;

export function MainSlide() {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    centerMode: true,
    centerPadding: '260px',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: <ArrowButton type="left top" src={leftArrow} left="260px" transform="translate(-25%, -50%)" />,
    nextArrow: <ArrowButton type="right top" src={righttArrow} right="260px" transform="translate(25%, -50%)" />,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          centerPadding: '150px',
          dots: false,
          prevArrow: <ArrowButton type="left top" src={leftArrow} left="100px" />,
          nextArrow: <ArrowButton type="right top" src={righttArrow} right="100px" />,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          centerPadding: '50px',
          dots: false,
          prevArrow: <ArrowButton type="left top" src={leftArrow} left="100px" />,
          nextArrow: <ArrowButton type="right top" src={righttArrow} right="100px" />,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          centerPadding: '150px',
          dots: false,
          prevArrow: <ArrowButton type="left top" src={leftArrow} left="100px" />,
          nextArrow: <ArrowButton type="right top" src={righttArrow} right="100px" />,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          centerPadding: '100px',
          dots: false,
          prevArrow: <ArrowButton type="left top" src={leftArrow} left="100px" />,
          nextArrow: <ArrowButton type="right top" src={righttArrow} right="100px" />,
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
          prevArrow: <ArrowButton type="left top" src={leftArrow} left="0px" />,
          nextArrow: <ArrowButton type="right top" src={righttArrow} right="0px" />,
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
      {/* <div id="hi" style={{ width: 'calc(384px * 0.8)', height: 'calc(250px 0.8)', borderRadius: '20px' }}>
        <img
          style={{ width: 'calc(384px * 0.8)', height: 'calc(250px 0.8)', borderRadius: '20px' }}
          src={mainSlide1}
          alt="메인슬라이드"
        />
      </div>
      <div id="hi" style={{ width: 'calc(384px * 0.8)', height: 'calc(250px 0.8)', borderRadius: '20px' }}>
        <img
          style={{ width: 'calc(384px * 0.8)', height: 'calc(250px 0.8)', borderRadius: '20px' }}
          src={mainSlide2}
          alt="메인슬라이드"
        />
      </div>
      <div id="hi" style={{ width: 'calc(384px * 0.8)', height: 'calc(250px 0.8)', borderRadius: '20px' }}>
        <img
          style={{ width: 'calc(384px * 0.8)', height: 'calc(250px 0.8)', borderRadius: '20px' }}
          src={mainSlide3}
          alt="메인슬라이드"
        />
      </div>
      <div id="hi" style={{ width: 'calc(384px * 0.8)', height: 'calc(250px 0.8)', borderRadius: '20px' }}>
        <img
          style={{ width: 'calc(384px * 0.8)', height: 'calc(250px 0.8)', borderRadius: '20px' }}
          src={mainSlide4}
          alt="메인슬라이드"
        />
      </div>
      <div id="hi" style={{ width: 'calc(384px * 0.8)', height: 'calc(250px 0.8)', borderRadius: '20px' }}>
        <img
          style={{ width: 'calc(384px * 0.8)', height: 'calc(250px 0.8)', borderRadius: '20px' }}
          src={mainSlide5}
          alt="메인슬라이드"
        />
      </div> */}
      {datas.map((data) => (
        <MainSlideCard key={data.id} src={data.src} />
      ))}
    </Slider>
  );
}
