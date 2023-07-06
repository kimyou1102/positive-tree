import React from 'react';
import styled from 'styled-components';
import { FlexContainer, Span } from '@atoms';
import complete from '../../../assets/images/complete.png';

interface ModalProps {
  modal: boolean;
}

const Img = styled.img`
  width: calc(8rem * 0.8);
  height: calc(8rem * 0.8);
  margin-bottom: 2.5rem;
`;

export function Modal({ modal }: ModalProps) {
  return (
    <FlexContainer
      id="modal"
      className={!modal ? 'none' : ''}
      width={36.75}
      height={32.5}
      align="center"
      justify="center"
      direction="column"
      bgColor="white"
    >
      <Img alt="체크아이콘" src={complete} />
      <Span size={1.875 * 0.8} weight="bold">
        캠페인 신청이 완료!
      </Span>
      <Span size={1.125 * 0.8} margin="1rem 0 0.5rem 0">
        추후 선정 시, 개별 카톡으로 알람이 가요
      </Span>
      <Span size={1.125 * 0.8}>발표날짜를 확인해주세요!</Span>
    </FlexContainer>
  );
}
