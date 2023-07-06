import React from 'react';
import { Span, Input } from '@atoms';
import styled from 'styled-components';

interface Props {
  text: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
}

export function LabelTextInput({ text, placeholder = '', value, onChange }: Props) {
  return (
    <>
      <Span>{text}</Span>
      <Input
        border="1px solid #DBDBDB"
        width={282}
        height={32}
        radius="8px"
        padding="0 0 0 8px"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
