import styled from "styled-components";
import { ActionButton, DetailButton } from "@components/buttons";
import { Heading } from "@components/headings";
import { ButtonGroup } from "@components/button-group"

export default function Home() {
  return (
    <>
      <Background>
        <Content>
          <StyledHeading>Zach & Kirsty</StyledHeading>
          <Date>
            1st August 2023
          </Date>
          <Location>Greece, Rhodes, Lindos</Location>
          <LinkContainer>
            <DetailButton href="/details" as="a">
              Details
            </DetailButton>
            <ActionButton href="/rsvp" as="a">
              RSVP
            </ActionButton>
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

export const StyledHeading = styled(Heading)`
  margin-block-end: 20px;
`;

export const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.font.content};

  margin-block-start: 150px;
`;

export const Location = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.font.content};

  margin-block-start: ${({ theme }) => theme.margin.large};
`;

export const LinkContainer = styled(ButtonGroup)`
  margin-block-start: ${({ theme }) => theme.margin.large};
`;
