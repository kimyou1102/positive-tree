import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FlexContainer } from '@atoms';
import { Kind, FilterButtons, ContentItem } from '@molecules';
import { ListHeader, Footer } from '@organisms';
import { ListType } from 'src/models/posts';

interface ListTemplateProps {
  title: string;
  datas: ListType[];
}

const Container = styled.div`
  width: calc(76.375rem * 0.8);
  margin: 0 auto;
  margin-top: calc(5rem * 0.8);
`;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  grid-gap: calc(4rem * 0.8) calc(1.5rem * 0.8);
`;

const EmptyWrap = styled.div`
  height: 100vh;
  display: flex;
`;

export function ListTemplate({ title, datas }: ListTemplateProps) {
  console.log(datas);

  return (
    <>
      <Container>
        <ListHeader title={title} />
        {datas.length === 0 ? (
          <EmptyWrap>
            <h1>게시된 글이 없어요</h1>
          </EmptyWrap>
        ) : (
          <FlexContainer wrap="wrap" justify="center" margin="3rem 0 0 0">
            <GridWrap>
              {datas.map((post) => (
                <ContentItem
                  key={post.id}
                  id={post.id}
                  category={post.category}
                  title={post.title}
                  description={post.description}
                  applicationDateStart={post.schedule.applicationDateStart}
                  applicationDateEnd={post.schedule.applicationDateEnd}
                  channel={post.channel}
                  type="list"
                  src={post.postImages[0].image}
                />
              ))}
            </GridWrap>
          </FlexContainer>
        )}
      </Container>
      <Footer />
    </>
  );
}
