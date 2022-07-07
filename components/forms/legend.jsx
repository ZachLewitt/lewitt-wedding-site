import styled from 'styled-components';

export const Legend = styled.legend`
  width: 100%;

  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.font.title};
  font-weight: bold;

  color: ${({ theme }) => theme.colors.contentForeground};
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightBorder};
  
  padding: 0px;
  padding-block-end: ${({ theme }) => theme.margin.small};

  margin: 0px;
  margin-block-end: ${({ theme }) => theme.margin.medium};
`;