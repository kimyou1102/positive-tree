import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowButton, PhotoSlideWrap } from '@atoms';
import { MainSlideCard } from '@molecules';
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
  const [width, setWidth] = useState<number>(window.innerWidth - 960 - 96);

  const handleResize = () => {
    // eslint-disable-next-line no-restricted-globals
    const windowWidth = innerWidth;
    setWidth(windowWidth - 960 - 96);
    if (windowWidth >= 735 && windowWidth < 1050) {
      setWidth(windowWidth - 960 + 310 - 72);
    } else if (windowWidth < 735) {
      setWidth(windowWidth - 960 + 310 + 310 - 48);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    centerMode: true,
    centerPadding: `${width / 2}px`,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: <ArrowButton type="left top" src={leftArrow} left={`${width / 2}px`} transform="translate(0%, -50%)" />,
    nextArrow: (
      <ArrowButton type="right top" src={righttArrow} right={`${width / 2}px`} transform="translate(0%, -50%)" />
    ),
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          centerPadding: `${width / 2}px`,
          dots: false,
          prevArrow: (
            <ArrowButton type="left top" src={leftArrow} left={`${width / 2}px`} transform="translate(0%, -50%)" />
          ),
          nextArrow: (
            <ArrowButton type="right top" src={righttArrow} right={`${width / 2}px`} transform="translate(0%, -50%)" />
          ),
        },
      },
      {
        breakpoint: 735,
        settings: {
          slidesToShow: 1,
          centerPadding: `${width / 2}px`,
          prevArrow: (
            <ArrowButton type="left top" src={leftArrow} left={`${width / 2}px`} transform="translate(0%, -50%)" />
          ),
          nextArrow: (
            <ArrowButton type="right top" src={righttArrow} right={`${width / 2}px`} transform="translate(0%, -50%)" />
          ),
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
  return (
    <Slider {...settings}>
      {datas.map((data) => (
        <MainSlideCard key={data.id} src={data.src} />
      ))}
    </Slider>
  );
}
