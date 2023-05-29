import styled, { css } from 'styled-components';

interface AccountCheckboxContainerProps {
  hasMargin?: boolean;
}

export const AccountCheckboxContainer = styled.div<AccountCheckboxContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  font-family: 'PretendardMedium';
  font-size: 0.8rem;
  margin-bottom: 0.7rem;

  ${(props) =>
    props.hasMargin &&
    css`
      margin-top: 1.5rem;
    `}
`;
