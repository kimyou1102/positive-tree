import React from 'react';
import styled from 'styled-components';
import { Span } from '@atoms';
import { Map, DatailDescription } from '@molecules';

interface DetailContents {
  address: string;
  provisionDetails: string;
  notice: string;
  mission: string;
  titleKeyword: string;
  bodyKeyword: string;
  addNotice: string;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 3rem 1rem;
`;

export function DetailContents({
  address,
  provisionDetails,
  notice,
  mission,
  titleKeyword,
  bodyKeyword,
  addNotice,
}: DetailContents) {
  return (
    <>
      <Container>
        <DatailDescription title="제공내역" description={provisionDetails} />
        <DatailDescription title="방문 및 예약안내" description={notice} />
      </Container>
      <Map address={address} />
      <Container>
        <DatailDescription title="캠페인 미션" description={mission} />
        <DatailDescription title="키워드" description={titleKeyword} description2={bodyKeyword} />
        <DatailDescription title="추가 안내사항" description={addNotice} />
      </Container>
    </>
  );
}
