import styled from "styled-components";

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.content};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};

  line-height: ${({ theme }) => theme.lineHeight.medium};
  margin: 0px 0px ${({ theme }) => theme.margin.medium} 0px;

  color: ${({ theme }) => theme.colors.contentForeground};
`;
