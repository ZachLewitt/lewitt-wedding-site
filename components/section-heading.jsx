import styled from "styled-components";

export const SectionHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  color: ${({ theme }) => theme.colors.contentForeground};
  margin-block: ${({ theme }) => theme.margin.extraLarge};
`;
