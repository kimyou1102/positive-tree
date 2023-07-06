import styled, { css } from 'styled-components';

interface AccountInputProps {
  noTopBorder?: boolean;
  signup?: boolean;
}

export const AccountInput = styled.input<AccountInputProps>`
  width: 100%;
  height: 3rem;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  padding: 0 0.5rem 0 0.5rem;
  font-family: 'PretendardBold';
  font-size: 0.9rem;

  &::placeholder {
    font-family: 'PretendardBold';
    font-size: 0.9rem;
  }

  /* &[type='date']::before {
    content: attr(data-placeholder);
    width: 100%;
  } */

  ${(props) =>
    props.signup &&
    css`
      margin-bottom: 0.3rem;
    `}

  ${(props) =>
    props.noTopBorder &&
    css`
      border-top: none;
    `}
`;
