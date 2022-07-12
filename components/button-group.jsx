import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;

  grid-gap: ${({ theme }) => theme.margin.medium};
`;