import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Span } from '@atoms';
import { FullViewButton } from './FullViewButton';

interface Props {
  title: string;
  isMore?: boolean;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 8px;
  border-bottom: 1px solid #999999;
`;

export function SectionTitle({ title, isMore }: Props) {
  const navigate = useNavigate();

  const onClick = () => {
    if (isMore) {
      if (title === '나의 캠페인') {
        navigate('/');
      } else {
        navigate('/');
      }
    }
  };

  const [text1, text2] = title.split(',');
  return (
    <Container>
      {title.includes('관심 캠페인') ? (
        <Span weight="bold" size={1.375}>
          {text1}
          <Span weight="bold" size={1.375} color="#542A01">
            {text2}
          </Span>
        </Span>
      ) : (
        <Span weight="bold" size={1.375}>
          {title}
        </Span>
      )}
      {isMore ? <FullViewButton onClick={() => onClick()} /> : null}
    </Container>
  );
}
