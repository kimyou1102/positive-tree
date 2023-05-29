import React from 'react';
import styled, { css } from 'styled-components';

interface AccountFlexDiv {
  justify?: string;
}

export const AccountFlexDiv = styled.div<AccountFlexDiv>`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
`;
