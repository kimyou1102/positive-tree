import React, { useEffect } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  address: string;
}

const { kakao } = window;

const Container = styled.div`
  width: calc(40.313rem * 0.8);
  height: calc(18.688rem * 0.8);
  margin-top: calc(3rem * 0.8);
  margin-bottom: calc(9.625rem * 0.8);
`;

export function Map({ address }: MapProps) {
  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, function (result: any, status: any) {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        const marker = new kakao.maps.Marker({
          map,
          position: coords,
        });

        map.setCenter(coords);
      }
    });
  }, [address]);

  return <Container id="map" />;
}
