import React from 'react';
import styled from 'styled-components';

interface ArrowProps {
  type: string;
  src: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  right?: string;
  left?: string;
  top?: string;
}

const StyledButton = styled.button<{ right: string; left: string; top: string }>`
  display: flex;
  position: absolute;
  z-index: 10;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: white;
  top: ${(props) => props.top};
  transform: translateY(-50%);
  cursor: pointer;
  &.right {
    right: ${(props) => props.right};
  }

  &.left {
    left: ${(props) => props.left};
  }
`;

export function ArrowButton({ type, src, onClick, right = '0px', left = '0px', top = '50%' }: ArrowProps) {
  return (
    <StyledButton onClick={onClick} className={type} right={right} left={left} top={top}>
      <img src={src} alt={type === 'right' ? '오른쪽화살표' : '왼쪽화살표'} width={8} height={14} />
    </StyledButton>
  );
}
