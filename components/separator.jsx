import styled from "styled-components";

export const Separator = styled.hr`
  width: 100%;
  height: ${({ thick }) => (thick ? "2px" : "1px")};

  background: ${({ theme }) => theme.colors.lightBorder};
  border: none;
  margin: 0px;
`;
