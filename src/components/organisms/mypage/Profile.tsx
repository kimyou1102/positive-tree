import React from 'react';
import styled from 'styled-components';
import { Img, FlexContainer, Span, Button } from '@atoms';
import temporaryImg from '../../../assets/images/main_slide1.png';
import rightArrow from '../../../assets/images/mypageRightArrow.png';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(250px * 0.8);
  border: 1px solid #dbdbdb;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  padding: calc(32px * 0.8) calc(40px * 0.8);
  margin-top: calc(36px * 0.8);
  margin-bottom: calc(86px * 0.8);
`;

const UserWrap = styled.div`
  width: 50%;
  height: 100%;
  border-right: 1px solid #dbdbdb;
`;

const MediaWrap = styled.div`
  padding-left: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 100px;
  margin-top: 60px;
`;

const Li = styled.li`
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;

  &.first {
    border-top: 1px solid #ddd;
  }
`;

export function Profile() {
  const point = 0;
  const count = 0;

  const blog = '';
  const instagram = '';
  const youtube = '';

  return (
    <Container>
      <UserWrap>
        <FlexContainer gap="20px">
          <Img src={temporaryImg} alt="프로필" radius="50px" width={120} height={120} objectfit="cover" />
          <FlexContainer direction="column" gap="8px">
            <Span size={1.5}>안녕하세요</Span>
            <Span size={1.5} weight="bold">
              [사용자명]님
            </Span>
            <Grid>
              <Span>포인트</Span>
              <Span>등록콘텐츠</Span>
              <Span weight="bold">{point} p</Span>
              <Span weight="bold">{count} 개</Span>
            </Grid>
          </FlexContainer>
        </FlexContainer>
      </UserWrap>
      <MediaWrap>
        <Span>긍정나무와 연결된 미디어</Span>
        <ul>
          <Li className="first">
            {blog === '' ? (
              <>
                <Span size={0.8} margin="0px 30px 0px 0px" color="#767676">
                  블로그를 연결해 주세요
                </Span>
                <Button>
                  <Img src={rightArrow} alt="프로필" radius="50px" width={14} height={14} objectfit="cover" />
                </Button>
              </>
            ) : (
              blog
            )}
          </Li>
          <Li>
            {instagram === '' ? (
              <>
                <Span size={0.8} margin="0px 30px 0px 0px" color="#767676">
                  인스타그램을 연결해 주세요
                </Span>
                <Button>
                  <Img src={rightArrow} alt="프로필" radius="50px" width={14} height={14} objectfit="cover" />
                </Button>
              </>
            ) : (
              instagram
            )}
          </Li>
          <Li>
            {youtube === '' ? (
              <>
                <Span size={0.8} margin="0px 30px 0px 0px" color="#767676">
                  유튜브를 연결해 주세요
                </Span>
                <Button>
                  <Img src={rightArrow} alt="프로필" radius="50px" width={14} height={14} objectfit="cover" />
                </Button>
              </>
            ) : (
              youtube
            )}
          </Li>
        </ul>
      </MediaWrap>
    </Container>
  );
}
