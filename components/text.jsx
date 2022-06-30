import styled from "styled-components";

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.content};
  line-height: ${({ theme }) => theme.lineHeight.medium};

  color: ${({ theme }) => theme.colors.contentForeground};

  margin: 0px 0px ${({ theme }) => theme.margin.medium} 0px;
`;
