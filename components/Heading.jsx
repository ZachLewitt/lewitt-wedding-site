import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  font-family: ${({ theme }) => theme.font.sansSerif};
  font-weight: normal;
  margin: 0px;
`;