import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  margin-block-end: ${({ theme }) => theme.margin.large};
  padding: 0px;
`;
