import styled from "styled-components";
import { Text } from "./text";

export const ScrollTopButton = (props) => {
  return (
    <ScrollContainer>
      <ScrollButton href="#" {...props}>&#8593;</ScrollButton>
      <ScrollText subtle>Back To Top</ScrollText>
    </ScrollContainer>
  );
};

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: ${({ theme }) => theme.margin.large};
`;

const ScrollButton = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryForeground};
  background: ${({ theme }) => theme.colors.primaryBackground};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  text-align: center;
  vertical-align: middle;
  font-size: 2rem;
  font-weight: bold;
  margin: 0px;
  margin-block-end: ${({ theme }) => theme.margin.small};
`;

const ScrollText = styled(Text)`
  margin: 0px;
`;