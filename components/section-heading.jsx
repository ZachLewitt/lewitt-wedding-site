import styled from "styled-components";

export const SectionHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.heading};
  color: ${({ theme }) => theme.colors.contentForeground};
`;
