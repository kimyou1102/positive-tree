import React from 'react';
import styled from 'styled-components';

interface ArrowProps {
  type: string;
  src: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
  transform?: string;
  width?: number;
  heigth?: number;
}

const StyledButton = styled.button<{ right: string; left: string; top: string; transform?: string; bottom?: string }>`
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
  transform: ${(props) => (props.transform ? props.transform : 'translate(-50%, -50%)')};
  cursor: pointer;
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.15);

  &.right {
    right: ${(props) => props.right};
  }

  &.left {
    left: ${(props) => props.left};
  }

  &.top {
    top: ${(props) => props.top};
  }

  &.bottom {
    bottom: ${(props) => props.bottom};
  }
`;

export function ArrowButton({
  type,
  src,
  onClick,
  right = '0px',
  left = '0px',
  top = '50%',
  transform,
  bottom,
  width,
  heigth,
}: ArrowProps) {
  return (
    <StyledButton
      onClick={onClick}
      className={type}
      right={right}
      left={left}
      top={top}
      transform={transform}
      bottom={bottom}
    >
      <img
        src={src}
        alt={type === 'right' ? '오른쪽화살표' : '왼쪽화살표'}
        width={width || '8px'}
        height={heigth || '14px'}
      />
    </StyledButton>
  );
}
