import styled, { css } from 'styled-components';

interface AcouuntButtonProps {
  theme: 'BLACK' | 'WHITE' | 'KAKAO' | 'GOOGLE';
  signup?: boolean;
}

export const AccountButton = styled.button<AcouuntButtonProps>`
  width: 100%;
  height: 3rem;
  margin-bottom: 0.4rem;
  font-family: 'PretendardBold';
  font-size: 1rem;
  cursor: pointer;

  ${(props) =>
    props.theme === 'BLACK' &&
    css`
      border: none;
      background-color: black;
      color: white;
    `}

  ${(props) =>
    props.theme === 'WHITE' &&
    css`
      border: 1px solid #dbdbdb;
      background-color: white;
      color: #767676;
    `}

    ${(props) =>
    props.theme === 'KAKAO' &&
    css`
      border: none;
      background-color: #fae100;
      color: black;
    `}

    ${(props) =>
    props.theme === 'GOOGLE' &&
    css`
      border: none;
      background-color: #4285f4;
      color: white;
    `}

  ${(props) =>
    props.signup &&
    css`
      width: 30rem;
      margin-bottom: 2rem;
    `}
`;
