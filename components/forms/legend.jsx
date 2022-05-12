import styled from 'styled-components';

export const Legend = styled.legend`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.contentForeground};
  padding: 0px;
  margin-block-end: ${({ theme }) => theme.margin.medium};
`;