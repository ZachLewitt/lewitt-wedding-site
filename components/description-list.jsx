import styled from 'styled-components';

export const DescriptionList = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0px;
`;

export const DescriptionTerm = styled.dt`
  font-size: ${({ theme }) => theme.fontSize.mediumLarge};
  font-family: ${({ theme }) => theme.font.title};
  color: ${({ theme }) => theme.colors.lightContentForeground};

  margin: 0px;
  margin-block-start: ${({ theme }) => theme.margin.large};
  margin-block-end: ${({ theme }) => theme.margin.medium};
  margin-inline-start: ${({ theme }) => theme.margin.large};
`;

export const DescriptionDefinition = styled.dd`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.font.title};

  margin: 0px;
  margin-block-start: ${({ theme }) => theme.margin.large};
  margin-block-end: ${({ theme }) => theme.margin.large};
  margin-inline-start: ${({ theme }) => theme.margin.large};
`;