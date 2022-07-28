import styled from "styled-components";
import { lighten } from "polished";

export const Text = styled.p`
  font-size: ${({ theme, large, small, subtle }) =>
    large
      ? theme.fontSize.large
      : small
      ? theme.fontSize.small
      : theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.content};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};

  line-height: ${({ theme }) => theme.lineHeight.medium};
  margin: 0px 0px ${({ theme }) => theme.margin.medium} 0px;

  color: ${({ theme, subtle }) =>
    subtle
      ? lighten(0.2, theme.colors.contentForeground)
      : theme.colors.contentForeground};

  &:last-child {
    margin-bottom: 0px;
  }
`;
