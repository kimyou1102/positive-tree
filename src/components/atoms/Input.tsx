import React from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  border: none;
  width: 10.7rem;
  height: 100%;
  background-color: transparent;
  padding-left: 1.2rem;
  box-sizing: border-box;
  outline: none;
`;

export function Input({ placeholder, value, onChange }: InputProps) {
  return <StyledInput placeholder={placeholder} value={value} onChange={onChange} />;
}
