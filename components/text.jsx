import styled from "styled-components";

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.sansSerif};
  color: ${({ theme }) => theme.colors.contentForeground};
`;
