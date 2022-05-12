import styled from "styled-components";

export const Section = styled.section`
  max-width: 700px;
  width: 100%;
  padding: ${({ theme }) => theme.margin.medium};
  border-block-end: 1px solid ${({ theme }) => theme.colors.lightBorder};
`;
