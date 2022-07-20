import styled from "styled-components";

export const Heading = styled.h1`
  font-size: ${({ theme, small }) =>
    small ? theme.fontSize.large : theme.fontSize.extraLarge};
  font-family: ${({ theme }) => theme.font.title};
  font-weight: normal;
  margin: 0px;
  text-align: center;
`;

export const ContentSubheading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.font.content};
  font-weight: bold;
  margin-block: 0px;
`;
