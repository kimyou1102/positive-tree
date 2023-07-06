import React, { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { FlexContainer } from './common';

interface PropsType {
  children: React.ReactNode;
}

export const SlideContainer = forwardRef((props: PropsType, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <FlexContainer ref={ref} overflowX="auto" direction="row" className="slide">
      {props.children}
    </FlexContainer>
  );
});

// eslint-disable-next-line no-lone-blocks
{
  /* <Container>{props.children}</Container> */
}
