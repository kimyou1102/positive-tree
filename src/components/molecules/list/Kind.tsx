import React from 'react';
import { Ul } from '@atoms';
import styled from 'styled-components';

const Li = styled.li`
  font-size: calc(0.875rem * 0.9);
  font-weight: 700;
  color: #767676;
`;

export function Kind() {
  const kinds = ['전체', '생활', '서비스', '유아동', '디지털', '뷰티', '패션', '도서', '식품', '반려동물'];
  return (
    <Ul justify="space-between" width={29}>
      {kinds.map((kind) => (
        <Li key={kind}>{kind}</Li>
      ))}
    </Ul>
  );
}
