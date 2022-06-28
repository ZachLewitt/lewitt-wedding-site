import styled from "styled-components";
import { ActionButton, DetailButton } from "@components/buttons";

export default function Home() {
  return (
    <>
      <Background>
        <Content>
          <Heading>Zach & Kirsty</Heading>
          <Date>1st August 2023</Date>
          <Location>Greece, Rhodes, Lindos</Location>
          <LinkContainer>       
            <DetailButton href="/details" as="a">Details</DetailButton>
            <ActionButton href="/rsvp" as="a">RSVP</ActionButton>
          </LinkContainer>
        </Content>
      </Background>
    </>
  );
}

const Background = styled.div`
  /* The image used */
  background-image: url("/landing.jpg");

  height: 100%;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.primaryForeground};
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  font-family: ${({ theme }) => theme.font.sansSerif};
  margin-block-end: 120px;
`;

export const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  
  margin-block-start: 90px;
`;

export const Location = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  
  margin-block-start: ${({ theme }) => theme.margin.large};
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-block-start: ${({ theme }) => theme.margin.large};
  grid-gap: ${({ theme }) => theme.margin.medium};
`;
