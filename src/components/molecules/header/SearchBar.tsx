import React from 'react';
import styled from 'styled-components';
import { Input } from '@atoms';
import Search from '../../../assets/images/Search.png';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  height: 2rem;
  width: 13rem;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: #eeeeee;

  button {
    width: 19px;
    height: 19px;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;

const StyledImg = styled.img`
  width: 19px;
  height: 19px;
`;

export function SearchBar({ placeholder = 'Search', value, onChange }: SearchBarProps) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <Container>
        <Input placeholder={placeholder} value={value} onChange={onChange} />
        <button type="button">
          <StyledImg src={Search} alt="돋보기" />
        </button>
      </Container>
    </form>
  );
}
