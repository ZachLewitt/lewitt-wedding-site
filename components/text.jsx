import styled from "styled-components";

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.contentForeground};
`;
