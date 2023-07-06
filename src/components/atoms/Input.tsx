import React from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  radius?: string;
  border?: string;
  width?: number;
  height?: number;
  padding?: string;
}

const StyledInput = styled.input<InputProps>`
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.radius || '0px'};
  width: ${(props) => `calc(${props.width}px * 0.8)` || '10.7rem'};
  height: ${(props) => `calc(${props.height}px * 0.8)` || '100%'};
  background-color: transparent;
  padding: ${(props) => props.padding || '0 0 0 1.2rem'};
  box-sizing: border-box;
  outline: none;
`;

export function Input({ placeholder, value, onChange, radius, border, width, height, padding }: InputProps) {
  const Props = { radius, border, width, height, padding };
  return <StyledInput placeholder={placeholder} value={value} onChange={onChange} {...Props} />;
}
