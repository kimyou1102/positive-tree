import React from 'react';
import styled from 'styled-components';
import { FlexContainer, Span } from '@atoms';
import instagramIcon from '../../../assets/images/instagram.png';
import blogIcon from '../../../assets/images/blog.png';
import youtubeIcon from '../../../assets/images/youtube.png';

interface ListDescriptionProps {
  title: string;
  description: string;
  applicationDateEnd: string;
  channel?: string;
}

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const DayText = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.063rem;
  margin: 0.3rem 0;
  display: flex;

  &.instagram {
    &:before {
      background: ${`url(${instagramIcon}) no-repeat`};
      content: '';
      width: calc(20px * 0.8);
      float: left;
      background-size: calc(20px * 0.8);
      margin-right: calc(4px * 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      height: inherit;
    }
  }

  &.blog {
    &:before {
      background: ${`url(${blogIcon}) no-repeat`};
      content: '';
      width: calc(20px * 0.8);
      float: left;
      background-size: calc(20px * 0.8);
      margin-right: calc(4px * 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      height: inherit;
    }
  }

  &.youtube {
    &:before {
      background: ${`url(${youtubeIcon}) no-repeat`};
      content: '';
      width: calc(20px * 0.8);
      float: left;
      background-size: calc(20px * 0.8);
      margin-right: calc(4px * 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      height: inherit;
    }
  }
`;

export function ListDescription({ title, description, applicationDateEnd, channel }: ListDescriptionProps) {
  const today = new Date();
  const compareDay = new Date(applicationDateEnd);
  const gap = compareDay.getTime() - today.getTime();
  const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
  let className = '';

  if (channel === '인스타그램') {
    className = 'instagram';
  } else if (channel === '블로그') {
    className = 'blog';
  } else {
    className = 'youtube';
  }

  return (
    <FlexContainer direction="column">
      <DayText className={className}>{result >= 0 ? `${result}일 남음` : `${result * -1}일 지남`}</DayText>

      <Title>{title}</Title>
      <Span size={0.625} margin="0 0 0.8rem 0">
        {description}
      </Span>
    </FlexContainer>
  );
}
