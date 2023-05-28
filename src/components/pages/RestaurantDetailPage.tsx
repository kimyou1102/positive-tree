import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ListType } from 'src/models/posts';
import { Span } from '@atoms';
import { PhotoSlide } from '@molecules';
import { DetailSide, DetailContents, Footer } from '@organisms';
import { getPost } from '../../apis/post/get-post-api';
import photo from '../../assets/images/detail.png';

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60rem;
  margin: auto;
  position: relative;
  margin-top: 7rem;
`;

export function RestaurantDetailPage() {
  const [detail, setDetail] = useState<ListType>();
  const { id } = useParams();
  console.log(id);

  const api = useCallback(async () => {
    await getPost(parseInt(id!, 10)).then((res) => {
      console.log(res);
      setDetail(res.data);
    });
  }, [id]);

  useEffect(() => {
    api();
  }, [api]);

  const photoTest = [
    { image: photo },
    { image: photo },
    { image: photo },
    { image: photo },
    { image: photo },
    { image: photo },
    { image: photo },
    { image: photo },
    { image: photo },
  ];

  // const title = '[전라] 유성횟집';
  // const sub = '석양이 잘 보이는 데다가 신선하기까지 한 가성비 횟집!';
  const requestStartDate = '2023-05-07';
  const requestEndDate = '2023-05-10';
  const registerStartDate = '2023-05-15';
  const registerEndDate = '2023-05-20';
  const resultDate = '2023-05-21';

  // const address = '전남 목포시 북항로 190';
  // const provisionDetails = '15만원 식사권 (2인 기준)';
  // const notice =
  //   "[영업시간] 월~토 10:30 - 21:30 / 일 11:30 - 21:30\n\n\n*주말체험은 일요일만 가능합니다! (토요일 불가)\n\n\n✔︎ 방문 예약시 회원가입한 번호 혹은 신청하신 번호로만 예약 가능합니다.\n✔︎ 체험권 양도 불가합니다.\n✔︎ 체험완료 후 마이플레이스 들어가서\n영수증리뷰 업로드 (별5개 한줄평) 꼭 부탁드립니다!\n✔︎ 예약은 방문 2일 전에는 꼭 부탁드립니다.\n✔︎ 블로그에 글 장성후 긍정나무 담당자게에 포스팅 링크 (URL) 부탁드립니다!\n\n\n*2일 전 체험권 내 연락처로 문자 예약 필수 / 당일 예약 불가\nㄴ예약을 하시더라도 매장 상황에 따라 웨이팅이 있을 수 있습니다.\n*매장 방문 시 체험권을 체험 전 선제시 후 참여 필수\n★★ 업체로 예약 및 방문시 '긍정나무' 당첨 내용을 알려주시기 바랍니다 ★★";
  // const mission =
  //   "[영업시간] 월~토 10:30 - 21:30 / 일 11:30 - 21:30\n\n\n*주말체험은 일요일만 가능합니다! (토요일 불가)\n\n\n✔︎ 방문 예약시 회원가입한 번호 혹은 신청하신 번호로만 예약 가능합니다.\n✔︎ 체험권 양도 불가합니다.\n✔︎ 체험완료 후 마이플레이스 들어가서\n영수증리뷰 업로드 (별5개 한줄평) 꼭 부탁드립니다!\n✔︎ 예약은 방문 2일 전에는 꼭 부탁드립니다.\n✔︎ 블로그에 글 장성후 긍정나무 담당자게에 포스팅 링크 (URL) 부탁드립니다!\n\n\n*2일 전 체험권 내 연락처로 문자 예약 필수 / 당일 예약 불가\nㄴ예약을 하시더라도 매장 상황에 따라 웨이팅이 있을 수 있습니다.\n*매장 방문 시 체험권을 체험 전 선제시 후 참여 필수\n★★ 업체로 예약 및 방문시 '긍정나무' 당첨 내용을 알려주시기 바랍니다 ★★";
  // const titleKeyword =
  //   "[영업시간] 월~토 10:30 - 21:30 / 일 11:30 - 21:30\n\n\n*주말체험은 일요일만 가능합니다! (토요일 불가)\n\n\n✔︎ 방문 예약시 회원가입한 번호 혹은 신청하신 번호로만 예약 가능합니다.\n✔︎ 체험권 양도 불가합니다.\n✔︎ 체험완료 후 마이플레이스 들어가서\n영수증리뷰 업로드 (별5개 한줄평) 꼭 부탁드립니다!\n✔︎ 예약은 방문 2일 전에는 꼭 부탁드립니다.\n✔︎ 블로그에 글 장성후 긍정나무 담당자게에 포스팅 링크 (URL) 부탁드립니다!\n\n\n*2일 전 체험권 내 연락처로 문자 예약 필수 / 당일 예약 불가\nㄴ예약을 하시더라도 매장 상황에 따라 웨이팅이 있을 수 있습니다.\n*매장 방문 시 체험권을 체험 전 선제시 후 참여 필수\n★★ 업체로 예약 및 방문시 '긍정나무' 당첨 내용을 알려주시기 바랍니다 ★★";
  // const bodyKeyword =
  //   "[영업시간] 월~토 10:30 - 21:30 / 일 11:30 - 21:30\n\n\n*주말체험은 일요일만 가능합니다! (토요일 불가)\n\n\n✔︎ 방문 예약시 회원가입한 번호 혹은 신청하신 번호로만 예약 가능합니다.\n✔︎ 체험권 양도 불가합니다.\n✔︎ 체험완료 후 마이플레이스 들어가서\n영수증리뷰 업로드 (별5개 한줄평) 꼭 부탁드립니다!\n✔︎ 예약은 방문 2일 전에는 꼭 부탁드립니다.\n✔︎ 블로그에 글 장성후 긍정나무 담당자게에 포스팅 링크 (URL) 부탁드립니다!\n\n\n*2일 전 체험권 내 연락처로 문자 예약 필수 / 당일 예약 불가\nㄴ예약을 하시더라도 매장 상황에 따라 웨이팅이 있을 수 있습니다.\n*매장 방문 시 체험권을 체험 전 선제시 후 참여 필수\n★★ 업체로 예약 및 방문시 '긍정나무' 당첨 내용을 알려주시기 바랍니다 ★★";
  // const addNotice =
  //   "[영업시간] 월~토 10:30 - 21:30 / 일 11:30 - 21:30\n\n\n*주말체험은 일요일만 가능합니다! (토요일 불가)\n\n\n✔︎ 방문 예약시 회원가입한 번호 혹은 신청하신 번호로만 예약 가능합니다.\n✔︎ 체험권 양도 불가합니다.\n✔︎ 체험완료 후 마이플레이스 들어가서\n영수증리뷰 업로드 (별5개 한줄평) 꼭 부탁드립니다!\n✔︎ 예약은 방문 2일 전에는 꼭 부탁드립니다.\n✔︎ 블로그에 글 장성후 긍정나무 담당자게에 포스팅 링크 (URL) 부탁드립니다!\n\n\n*2일 전 체험권 내 연락처로 문자 예약 필수 / 당일 예약 불가\nㄴ예약을 하시더라도 매장 상황에 따라 웨이팅이 있을 수 있습니다.\n*매장 방문 시 체험권을 체험 전 선제시 후 참여 필수\n★★ 업체로 예약 및 방문시 '긍정나무' 당첨 내용을 알려주시기 바랍니다 ★★";

  const title = detail?.title || '';
  const sub = detail?.description || '';
  // const requestStartDate = detail?.schedule.applicationDateStart || '';
  // const requestEndDate = detail?.schedule.applicationDateEnd || '';
  // const registerStartDate = detail?.schedule.contentsDateStart || '';
  // const registerEndDate = detail?.schedule.contentsDateEnd || '';
  // const resultDate = detail?.schedule.resultDate || '';

  const address = detail?.address || '';
  const provisionDetails = detail?.provision || '';
  const notice = detail?.reservationInfo || '';
  const mission = detail?.mission || '';
  const titleKeyword = detail?.titleKeywords || '';
  const bodyKeyword = detail?.bodyKeywords || '';
  const addNotice = detail?.additionalInfo || '';

  const slideProps = {
    requestStartDate,
    requestEndDate,
    registerStartDate,
    registerEndDate,
    resultDate,
  };

  const contentsProps = {
    requestStartDate,
    requestEndDate,
    registerStartDate,
    registerEndDate,
    resultDate,
    address,
    provisionDetails,
    notice,
    mission,
    titleKeyword,
    bodyKeyword,
    addNotice,
  };

  const nonePhoto = [{ image: '' }];

  return (
    <>
      <div style={{ width: 'calc(100% - ((100% - 60rem)/2))', margin: '4rem 0 0 auto', paddingLeft: '3rem' }}>
        <TitleWrap>
          <Span weight="bold" size={1.625} margin="0 0 0.5rem 0">
            {title}
          </Span>
          <Span color="#767676">{sub}</Span>
        </TitleWrap>
        {/* <PhotoSlide datas={detail?.postImages || nonePhoto} /> */}
        <PhotoSlide datas={photoTest} />
      </div>
      <ContentWrap>
        <div style={{ maxWidth: 'calc(49.5rem * 0.8)', float: 'left' }}>
          <DetailContents {...contentsProps} />
        </div>
        <div>
          <DetailSide {...slideProps} />
        </div>
      </ContentWrap>
      <Footer />
    </>
  );
}
