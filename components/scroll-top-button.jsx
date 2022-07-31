import styled from "styled-components";
import { Text } from "./text";

export const ScrollTopButton = (props) => {
  return (
    <ScrollContainer>
      <ScrollButton href="#" {...props}><ScrollIcon /></ScrollButton>
      <ScrollText subtle>Back To Top</ScrollText>
    </ScrollContainer>
  );
};

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin-block-start: ${({ theme }) => theme.margin.large};
  margin-block-end: ${({ theme }) => theme.margin.medium};
`;

const ScrollButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.primaryBackground};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0px;
  margin-block-end: ${({ theme }) => theme.margin.small};
`;

const ScrollIcon = styled.div`
  border-top: 7px solid #FFF;
  border-right: 7px solid #FFF;
  transform: translateY(4px) rotate(-45deg);
  width: 20px;
  height: 20px;
`;

const ScrollText = styled(Text)`
  margin: 0px;
`;
