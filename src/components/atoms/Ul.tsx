import styled from 'styled-components';

interface Props {
  width?: number | string;
  direction?: 'column' | 'row';
  justify?: string;
  align?: string;
  margin?: string;
  padding?: string;
  wrap?: string;
}

export const Ul = styled.ul<Props>`
  display: flex;
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  width: ${(props) => (props.width ? `calc(${props.width}rem * 0.8)` : 'auto')};
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  flex-wrap: ${(props) => (props.wrap ? props.wrap : 'nowrap')};
  justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
  align-items: ${(props) => (props.align ? props.align : 'flex-start')};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  box-sizing: border-box;
`;
