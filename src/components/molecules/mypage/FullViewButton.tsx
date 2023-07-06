import React from 'react';
import styled from 'styled-components';
import rightArrow from '../../../assets/images/mypageRightArrow.png';

interface Props {
  onClick: () => void;
}

const StyledSpan = styled.span`
  color: #767676;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.75rem;
  &:before {
    background: ${`url(${rightArrow}) no-repeat`};
    content: '';
    width: calc(12px * 0.8);
    float: right;
    background-size: calc(12px * 0.8);
    margin-left: calc(4px * 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(12px * 0.8);
  }
`;

export function FullViewButton({ onClick }: Props) {
  return <StyledSpan onClick={onClick}>전체보기</StyledSpan>;
}
