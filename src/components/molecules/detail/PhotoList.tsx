import React from 'react';
import styled from 'styled-components';

type DataType = {
  image: string;
};

interface PhotoListProps {
  datas: DataType[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(49.5rem * 0.8);
`;

const Img = styled.img`
  width: calc(49.5rem * 0.8);
  height: calc(42.563rem * 0.8);
`;

export function PhotoList({ datas }: PhotoListProps) {
  return (
    <Container>
      {datas.map((data, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Img key={`${data.image}-${i}`} alt="사진" src={data.image} />
      ))}
    </Container>
  );
}
